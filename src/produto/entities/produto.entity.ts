import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({ length: 255, nullable: false })
    @IsNotEmpty()
    @ApiProperty()
    nome: string;

    @Column({ length: 1000, nullable: false })
    @IsNotEmpty()
    @ApiProperty()
    descricao: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    @IsNotEmpty()
    @ApiProperty()
    preco: number;

    @Column({ type: "int", nullable: false })
    @IsNotEmpty()
    @ApiProperty()
    quantidade: number;

    @Column({ length: 5000, nullable: true })
    @ApiProperty()
    foto: string;

    @ApiProperty({ type: () => Categoria })
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;
}