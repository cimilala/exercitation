import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stu_info')
export class StuInfo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  sex:string
  @Column()
  name:string
  @Column()
  stu_number: string;
  @Column()
  class: string;
  @Column()
  school: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  wechat: string;
  @Column()
  college: string;
  @Column()
  per_signature: string;
  @Column()
  photo:string
}
