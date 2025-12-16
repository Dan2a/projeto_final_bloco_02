import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}