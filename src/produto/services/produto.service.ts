import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,

        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: ['categoria'],
        });
    }

    async findById(id: number): Promise<Produto> {
        let buscaProduto = await this.produtoRepository.findOne({
            where: { id },
            relations: ['categoria']
        })

        if (!buscaProduto) {
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
        }

        return buscaProduto;
    }

    async findByName(nome: string): Promise<Produto[]> {
        return this.produtoRepository.find({
            where: { nome: ILike(`%${nome}%`) },
            relations: ['categoria'],
        });
    }

    async create(produto: Produto): Promise<Produto> {
        await this.validarCategoria(produto.categoria);

        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {
        await this.findById(produto.id);

        if (produto.categoria) {
            await this.validarCategoria(produto.categoria);
        }

        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.produtoRepository.delete(id);
    }

    private async validarCategoria(categoria: Categoria): Promise<void> {
        if (categoria) {
            let buscaCategoria = await this.categoriaRepository.findOne({
                where: { id: categoria.id }
            });

            if (!buscaCategoria) {
                throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
            }
        }
    }

}