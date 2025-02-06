<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { RoomBooking } from '@/interfaces/roomBooking';
import RoomBookingService from '@/services/roomBookingService';

const router = useRouter();

// Dữ liệu danh sách đặt phòng
const bookings = ref<RoomBooking[]>([]);;

const searchText = ref('');

const filteredBookings = computed(() =>
  RoomBookingService.getAll().filter(b =>
    b.roomName.toLowerCase().includes(searchText.value.toLowerCase()) ||
    b.hostName.toLowerCase().includes(searchText.value.toLowerCase()) ||
    b.subject.toLowerCase().includes(searchText.value.toLowerCase())
  )
);
const fetchingBookings = () => {
  const response = RoomBookingService.getAll()
  console.log(response)
  bookings.value = response
}
const viewDetail = (BookingId: number) => {
  alert('Xem chi tiết :' + BookingId);
}

// Chuyển sang trang thêm mới
const goToAddBooking = () => {
  router.push('/room-booking-create');
};
onMounted(fetchingBookings)
</script>

<template>
  <div>
    <h2>Danh sách đặt phòng</h2>
    <div class="d-flex justify-content-between mb-3">
      <input v-model="searchText" placeholder="Tìm kiếm..." class="form-control w-25" />
      <button class="btn btn-primary" @click="goToAddBooking">Thêm mới</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Phòng</th>
          <th>Người đặt</th>
          <th>Bắt đầu</th>
          <th>Kết thúc</th>
          <th>Chủ đề</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in filteredBookings" :key="booking.id">
          <td>{{ booking.roomName }}</td>
          <td>{{ booking.hostName }}</td>
          <td>{{ booking.startTime }}</td>
          <td>{{ booking.endTime }}</td>
          <td>{{ booking.subject }}</td>
          <td><button class="btn btn-info" @click="viewDetail(booking.id)">Xem</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
