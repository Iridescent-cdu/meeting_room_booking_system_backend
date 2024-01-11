/*
 * @Date: 2024-01-11 12:55:28
 * @Description: Permission表
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'permissions',
})
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    comment: '权限代码',
  })
  code: string;

  @Column({
    length: 100,
    comment: '权限描述',
  })
  description: string;
}
