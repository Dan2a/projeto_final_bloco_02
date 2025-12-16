import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./services/produto.service";
import { Categoria } from "../categoria/entities/categoria.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Produto, Categoria])],
    providers: [ProdutoService],
    controllers: [],
    exports: [],
})
export class ProdutoModule { }