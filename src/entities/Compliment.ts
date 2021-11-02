import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    user_sender: number;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: number;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceivar: User;

    @Column()
    tag_id: number;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Compliment }
