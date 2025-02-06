<script setup lang="ts">
import { ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { RoomName, HostName, MeetingDate, StartTime, EndTime, Subject, Description } from '@/constants/const_name.ts';
import RoomBookingService from '@/services/roomBookingService';
import type { RoomBooking } from '@/interfaces/roomBooking';
const router = useRouter();

const booking = ref<RoomBooking>({
  roomName: '',
  hostName: '',
  meetingDate: new Date(),
  startTime: '',
  endTime: '',
  subject: '',
  description: '',
  id: 0
});
// console.log(RoomName.id)
const submitForm = () => {
  console.log('Dữ liệu gửi:', booking.value);
  const response = RoomBookingService.create(toRaw(booking.value));
  alert('Đặt phòng thành công!');
  router.push('/room-bookings');
};
</script>

<template>
  <div>
    <h2>Thêm mới đặt phòng</h2>

    <form @submit.prevent="submitForm" class="form">
      <div class="row mb-3">
        <div class="col-6">
          <label :for="RoomName.id" class="form-label">{{ RoomName.vn }}</label>
          <select v-model="booking.roomName" placeholder="Tên phòng" required class="form-select" :id="RoomName.id"
            :name="RoomName.name">
            <option value=empty>Chọn phòng</option>
            <option>Phòng A</option>
            <option>Phòng B</option>
            <option>Phòng C</option>
          </select>
        </div>
        <div class="col-6">
          <label :for="Subject.id" class="form-label">{{ Subject.vn }}</label>
          <input v-model="booking.subject" placeholder="Chủ đề" required class="form-control" :id="Subject.id"
            :name="Subject.name" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <label :for="HostName.id" class="form-label">{{ HostName.vn }}</label>
          <input v-model="booking.hostName" placeholder="Người đặt" required class="form-control" :id="HostName.id"
            :name="HostName.name" />
        </div>
        <div class="col-6">
          <label :for="MeetingDate.id" class="form-label">{{ MeetingDate.vn }}</label>
          <input v-model="booking.meetingDate" type="date" required class="form-control" :id="MeetingDate.id"
            :name="MeetingDate.name" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <label :for="StartTime.id" class="form-label">{{ StartTime.vn }}</label>
          <input v-model="booking.startTime" type="time" required class="form-control" :id="StartTime.id"
            :name="StartTime.name" />
        </div>
        <div class="col-6">
          <label :for="EndTime.id" class="form-label">{{ EndTime.vn }}</label>
          <input v-model="booking.endTime" type="time" required class="form-control" :id="EndTime.id"
            :name="EndTime.name" />
        </div>
      </div>

      <div class="mb-3">
        <label :for="Description.id" class="form-label">{{ Description.vn }}</label>
        <textarea v-model="booking.description" placeholder="Mô tả" class="form-control" :id="Description.id"
          :name="Description.name"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Lưu</button>
      <button type="button" class="btn btn-danger" @click="router.push('/room-bookings')">Hủy</button>
    </form>
  </div>
</template>
