import type { RoomBooking } from '@/interfaces/roomBooking'
import { defineStore } from 'pinia'

export const useRoomBookingStore = defineStore('roomBooking', {
  state: () => ({
    bookings: [] as RoomBooking[], // Danh sách đặt phòng
  }),

  getters: {
    totalBookings: (state) => state.bookings.length, // Getter đếm số phòng
  },

  actions: {
    addBooking(booking: RoomBooking) {
      this.bookings.push(booking)
    },
    removeBooking(id: number) {
      this.bookings = this.bookings.filter((b) => b.id !== id)
    },
  },
})
