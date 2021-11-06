import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Expose } from "class-transformer";

@Entity("tags")
class Tag {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({ name: "name_Custom" })
    nameCustom(): string {
        return `#${this.name}`;
    }

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Tag }
