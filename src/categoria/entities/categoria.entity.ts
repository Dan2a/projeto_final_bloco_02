import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_categoria" })
export class Categoria {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({ length: 255, nullable: false })
    @IsNotEmpty()
    @ApiProperty()
    nome: string;

    @Column({ length: 255, nullable: false })
    @IsNotEmpty()
    @ApiProperty()
    descricao: string;

    @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];

}