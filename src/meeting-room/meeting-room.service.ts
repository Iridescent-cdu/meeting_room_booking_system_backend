import { BadRequestException, Injectable } from '@nestjs/common';
import { MeetingRoom } from './entities/meeting-room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';

@Injectable()
export class MeetingRoomService {
  @InjectRepository(MeetingRoom)
  private meetingRoomRepository: Repository<MeetingRoom>;

  initData() {
    const room1 = new MeetingRoom();
    room1.name = '木星';
    room1.capacity = 10;
    room1.equipment = '白板';
    room1.location = '一层西';

    const room2 = new MeetingRoom();
    room2.name = '金星';
    room2.capacity = 5;
    room2.equipment = '';
    room2.location = '二层东';

    const room3 = new MeetingRoom();
    room3.name = '天王星';
    room3.capacity = 30;
    room3.equipment = '白板，电视';
    room3.location = '三层东';

    this.meetingRoomRepository.insert([room1, room2, room3]);
  }

  async find(pageNo: number, pageSize: number) {
    if (pageNo < 1) {
      throw new BadRequestException('页面最小为1');
    }
    const skipCount = (pageNo - 1) * pageSize;
    const [meetingRooms, totalCount] =
      await this.meetingRoomRepository.findAndCount({
        skip: skipCount,
        take: pageSize,
      });

    return {
      meetingRooms,
      totalCount,
    };
  }

  async create(meetingRoomDto: CreateMeetingRoomDto) {
    const room = await this.meetingRoomRepository.findOneBy({
      name: meetingRoomDto.name,
    });
    if (room) {
      throw new BadRequestException('会议室名字已经存在');
    }
    return await this.meetingRoomRepository.insert(meetingRoomDto);
  }

  async update(meetingRoomDto: UpdateMeetingRoomDto) {
    const foundMeetingRoom = await this.meetingRoomRepository.findOneBy({
      id: meetingRoomDto.id,
    });

    if (!foundMeetingRoom) {
      throw new BadRequestException('会议室不存在');
    }

    foundMeetingRoom.name = meetingRoomDto.name;
    foundMeetingRoom.capacity = meetingRoomDto.capacity;
    foundMeetingRoom.description = meetingRoomDto.description;
    foundMeetingRoom.equipment = meetingRoomDto.equipment;
    foundMeetingRoom.location = meetingRoomDto.location;

    await this.meetingRoomRepository.update(
      { id: foundMeetingRoom.id },
      foundMeetingRoom,
    );

    return 'success';
  }

  async findById(id: number) {
    return await this.meetingRoomRepository.findOneBy({
      id: id,
    });
  }

  async deleteById(id: number) {
    await this.meetingRoomRepository.delete({
      id: id,
    });
    return 'success';
  }
}
