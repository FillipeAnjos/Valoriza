import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { User };