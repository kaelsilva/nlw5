import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";
import { User } from "./User";

@Entity("messages")
export class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
  user: User;

  @Column()
  admin_id: string | null;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}