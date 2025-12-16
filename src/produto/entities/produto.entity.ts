import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ length: 255, nullable: false })
    @IsNotEmpty()
    nome: string;

    @Column({ length: 1000, nullable: false })
    @IsNotEmpty()
    descricao: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    @IsNotEmpty()
    preco: number;

    @Column({ type: "int", nullable: false })
    @IsNotEmpty()
    quantidade: number;

    @Column({ length: 5000, nullable: true })
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;
}