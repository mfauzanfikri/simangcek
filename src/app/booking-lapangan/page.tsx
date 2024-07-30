'use client';

import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, DayRange, utils } from 'react-modern-calendar-datepicker';

export default function Page() {
  const [selectedDay, setSelectedDay] = useState<DayRange | null>(null);

  return (
    <div className="bg-background w-full h-full">
      <main className="container mx-auto py-20">
        <section className="mx-auto">
          <div className="flex justify-center items-center gap-48">
            <div className="flex flex-col justify-center items-center gap-1.5 w-52 relative">
              <div className="flex justify-center z-10">
                <div className="bg-white rounded-full border-4 border-secondary w-8 h-8"></div>
              </div>
              <p className="text-lg">Pilih Waktu dan Tempat</p>
              <div className="w-[calc(100%+12rem)] start-1/2 top-4 absolute h-0.5 -z-1 bg-secondary"></div>
            </div>

            <div className="flex flex-col justify-center items-center w-52 gap-1.5 relative">
              <div className="flex justify-center z-10">
                <div className="bg-white rounded-full border-4 border-secondary w-8 h-8"></div>
              </div>
              <p className="text-lg">Informasi Pemesanan</p>
              <div className="w-[calc(100%+12rem)] start-1/2 top-4 absolute h-0.5 -z-1 bg-gray-300"></div>
            </div>

            <div className="flex flex-col justify-center items-center w-52 gap-1.5">
              <div className="flex justify-center z-10">
                <div className="bg-white rounded-full border-4 border-secondary w-8 h-8"></div>
              </div>
              <p className="text-lg">Pembayaran</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-col text-center items-center">
            <svg
              width="54"
              height="53"
              viewBox="0 0 54 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.7979 28.426C35.0522 28.426 29.5958 33.8994 29.5958 40.6281C29.5958 47.3738 35.0522 52.8302 41.7979 52.8302C48.5436 52.8302 54 47.3738 54 40.6281C54 33.8994 48.5436 28.426 41.7979 28.426ZM41.7979 50.1319C36.5465 50.1319 32.2941 45.8795 32.2941 40.6281C32.2941 35.3767 36.5465 31.1243 41.7979 31.1243C47.0493 31.1243 51.3017 35.3767 51.3017 40.6281C51.3017 45.8795 47.0493 50.1319 41.7979 50.1319ZM46.87 5.21727C46.87 2.33966 44.5389 0 41.6528 0H5.21727C2.33966 0 0 2.33112 0 5.21727V8.89753H46.87V5.21727ZM30.5949 5.10626H16.2751C15.9165 5.10626 15.6262 4.81594 15.6262 4.45731C15.6262 4.09867 15.9165 3.79981 16.2751 3.79981H30.5949C30.9535 3.79981 31.2524 4.09013 31.2524 4.45731C31.2524 4.81594 30.9535 5.10626 30.5949 5.10626Z"
                fill="#6EAA44"
              />
              <path
                d="M47.1603 40.1328H43.3605C43.2154 39.6717 42.8824 39.3045 42.4469 39.1166V33.481C42.4469 33.1223 42.1565 32.8235 41.7894 32.8235C41.4307 32.8235 41.1404 33.1138 41.1404 33.481V39.1166C40.5512 39.3728 40.1414 39.9535 40.1414 40.6366C40.1414 41.5502 40.8842 42.2931 41.7979 42.2931C42.4127 42.2931 42.9421 41.9516 43.2239 41.4478H47.1603C47.519 41.4478 47.8178 41.1574 47.8178 40.7903C47.8178 40.4231 47.519 40.1328 47.1603 40.1328ZM41.7979 26.7182C43.5911 26.7182 45.2989 27.0683 46.8786 27.6916V10.6053H0V38.9971C0 41.8747 2.33112 44.2058 5.21727 44.2058H28.3662C28.0588 43.0616 27.8795 41.8662 27.8795 40.628C27.888 32.9601 34.1214 26.7182 41.7979 26.7182ZM37.1784 13.0303H43.2068V18.8368H37.1784V13.0303ZM26.334 13.0303H32.3624V18.8368H26.334V13.0303ZM10.6822 38.9032H4.6537V33.0967H10.6822V38.9032ZM10.6822 28.87H4.6537V23.0635H10.6822V28.87ZM10.6822 18.8368H4.6537V13.0303H10.6822V18.8368ZM21.5266 38.9032H15.4981V33.0967H21.5266V38.9032ZM21.5266 28.87H15.4981V23.0635H21.5266V28.87ZM21.5266 18.8368H15.4981V13.0303H21.5266V18.8368ZM26.334 23.0635H32.3624V28.87H26.334V23.0635Z"
                fill="#F58465"
              />
            </svg>

            <h1 className="font-bold text-2xl">Booking Lapangan Segera!</h1>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex gap-4">
            <div className="w-[55%] rounded-lg bg-white py-8 px-6">
              <div>logo dispora</div>
              <p>Pilih tanggal booking lapangan yang anda inginkan</p>

              <div className=" mt-4 flex justify-center">
                <Calendar
                  minimumDate={utils('en').getToday()}
                  value={selectedDay!}
                  onChange={setSelectedDay}
                  shouldHighlightWeekends
                />
              </div>
            </div>

            <div className="w-[45%] rounded-lg bg-white  py-8 px-6">
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <p className="text-lg font-semibold">Pilih Jenis Penyewaan</p>

                  <div className="flex gap-1.5 mt-4">
                    <div className="flex items-center">
                      <input
                        checked
                        id="jenis-penyewaan-1"
                        type="radio"
                        value="1"
                        name="jenis-penyewaan"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="jenis-penyewaan-1"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Per Sesi
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="jenis-penyewaan-2"
                        type="radio"
                        value="2"
                        name="jenis-penyewaan"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="jenis-penyewaan-2"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Per Event (ex:pameran)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-lg font-semibold">Pilih Lapangan</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="py-2 px-3 border border-gray-500 rounded-lg flex gap-1 items-center">
                      <div className="w-10 h-10 bg-gray-700"></div>
                      <div>
                        <p>Lapangan Bola Kamboja</p>
                        <p>Mayor Santoso, Palembang</p>
                      </div>
                    </div>
                    <div className="py-2 px-3 border border-gray-500 rounded-lg flex gap-1 items-center bg-gray-200">
                      <div className="w-10 h-10 bg-gray-700"></div>
                      <div>
                        <p>Lapangan Bola Kamboja</p>
                        <p>Mayor Santoso, Palembang</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-lg font-semibold">Pilih Lapangan</p>
                  <p className="mt-2">
                    Silahkan pilih lapangan terlebih dahulu
                  </p>

                  <div className="mt-4 flex flex-col gap-2">
                    <div className="py-4 px-3 border border-gray-500 rounded-lg text-center text-secondary">
                      06:00 - 12:00
                    </div>

                    <div className="py-4 px-3 border border-gray-500 rounded-lg text-center text-secondary bg-gray-200">
                      12:00 - 18:00
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <button className="py-3 px-4 bg-primary rounded-full text-white">
                    Lanjut Ke Informasi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
