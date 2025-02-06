import type { ApiResponse } from '@/interfaces/apiResponse'
import type { RoomBooking } from '@/interfaces/roomBooking'
import axios from 'axios'

const API_BASE_URL = 'https://api.example.com/bookings'
export default class RoomBookingService {
  // 📌 1️⃣ Lấy danh sách đặt phòng
  static async getAllAsync(): Promise<ApiResponse<RoomBooking[]>> {
    const response = await axios.get(API_BASE_URL)
    return response.data
  }

  // 📌 2️⃣ Xem chi tiết đặt phòng
  static async getByIdAsync(id: string): Promise<ApiResponse<RoomBooking>> {
    const response = await axios.get(`${API_BASE_URL}/${id}`)
    return response.data
  }

  // 📌 3️⃣ Thêm mới đặt phòng
  static async createAsync(booking: RoomBooking): Promise<ApiResponse<RoomBooking>> {
    const response = await axios.post(API_BASE_URL, booking)
    return response.data
  }

  // 📌 4️⃣ Cập nhật đặt phòng
  static async updateAsync(id: string, booking: RoomBooking): Promise<ApiResponse<RoomBooking>> {
    const response = await axios.put(`${API_BASE_URL}/${id}`, booking)
    return response.data
  }

  // 📌 5️⃣ Xóa đặt phòng
  static async deleteAsync(id: string): Promise<ApiResponse<null>> {
    const response = await axios.delete(`${API_BASE_URL}/${id}`)
    return response.data
  }

  static bookingsList = [
    {
      id: 1,
      roomName: 'Room 1',
      hostName: 'John Doe',
      meetingDate: new Date('2023-06-01'),
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Meeting',
      description: 'Discuss project progress',
    },
    {
      id: 2,
      roomName: 'Room 2',
      hostName: 'Jane Smith',
      meetingDate: new Date('2023-06-02'),
      startTime: '14:00',
      endTime: '15:00',
      subject: 'Presentation',
      description: 'Present new product',
    },
    {
      id: 3,
      roomName: 'Room 3',
      hostName: 'Alice Johnson',
      meetingDate: new Date('2023-06-03'),
      startTime: '10:00',
      endTime: '11:00',
      subject: 'Team Meeting',
      description: 'Discuss project updates',
    },
    {
      id: 4,
      roomName: 'Room 4',
      hostName: 'Bob Williams',
      meetingDate: new Date('2023-06-04'),
      startTime: '16:00',
      endTime: '17:00',
      subject: 'Client Meeting',
      description: 'Discuss project progress',
    },
    {
      id: 5,
      roomName: 'Room 5',
      hostName: 'Eva  Davis',
      meetingDate: new Date('2023-06-05'),
      startTime: '11:00',
      endTime: '12:00',
      subject: 'Team Meeting',
      description: 'Discuss project updates',
    },
  ]
  static getAll(): RoomBooking[] {
    return this.bookingsList
  }
  static getById(id: number): RoomBooking | undefined {
    return this.bookingsList.find((booking) => booking.id === id)
  }
  static create(booking: RoomBooking): RoomBooking {
    this.bookingsList.push(booking)
    return booking
  }
  static update(id: number, booking: RoomBooking): RoomBooking | undefined {
    const index = this.bookingsList.findIndex((b) => b.id === id)
    if (index !== -1) {
      this.bookingsList[index] = booking
      return booking
    }
    return undefined
  }
  static delete(id: number): void {
    const index = this.bookingsList.findIndex((b) => b.id === id)
    if (index !== -1) {
      this.bookingsList.splice(index, 1)
    }
  }
}
