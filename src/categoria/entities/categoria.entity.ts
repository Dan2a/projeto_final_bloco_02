import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: "tb_categoria" })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: false })
    @IsNotEmpty()
    nome: string;

    @Column({ length: 255, nullable: false })
    @IsNotEmpty()
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];

}