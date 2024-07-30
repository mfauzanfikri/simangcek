export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <section>
          <h1 className="text-2xl font-semibold">
            Selamat Datang Dibooking Lapangan Kota Palembang
          </h1>

          <div className="mt-5 shadow rounded-md max-w-60 py-4 bg-white">
            <a
              href="/booking-lapangan"
              className="hover:opacity-90 hover:cursor-pointer max-w-60"
            >
              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.7211 20.7922C24.9734 20.7922 21.9421 23.833 21.9421 27.5712C21.9421 31.3188 24.9734 34.3501 28.7211 34.3501C32.4687 34.3501 35.5 31.3188 35.5 27.5712C35.5 23.833 32.4687 20.7922 28.7211 20.7922ZM28.7211 32.851C25.8036 32.851 23.4412 30.4886 23.4412 27.5712C23.4412 24.6537 25.8036 22.2913 28.7211 22.2913C31.6385 22.2913 34.0009 24.6537 34.0009 27.5712C34.0009 30.4886 31.6385 32.851 28.7211 32.851ZM31.5389 7.89848C31.5389 6.29981 30.2438 5 28.6404 5H8.39848C6.79981 5 5.5 6.29507 5.5 7.89848V9.94307H31.5389V7.89848ZM22.4972 7.83681H14.5417C14.3425 7.83681 14.1812 7.67552 14.1812 7.47628C14.1812 7.27704 14.3425 7.11101 14.5417 7.11101H22.4972C22.6964 7.11101 22.8624 7.2723 22.8624 7.47628C22.8624 7.67552 22.6964 7.83681 22.4972 7.83681Z"
                      fill="#6EAA44"
                    />
                    <path
                      d="M31.7002 27.296H29.5892C29.5085 27.0398 29.3235 26.8358 29.0816 26.7315V23.6005C29.0816 23.4013 28.9203 23.2353 28.7163 23.2353C28.5171 23.2353 28.3558 23.3966 28.3558 23.6005V26.7315C28.0285 26.8738 27.8008 27.1964 27.8008 27.5759C27.8008 28.0835 28.2135 28.4962 28.7211 28.4962C29.0626 28.4962 29.3567 28.3064 29.5133 28.0265H31.7002C31.8994 28.0265 32.0655 27.8653 32.0655 27.6613C32.0655 27.4573 31.8994 27.296 31.7002 27.296ZM28.7211 19.8434C29.7173 19.8434 30.666 20.0379 31.5436 20.3842V10.8918H5.5V26.6651C5.5 28.2637 6.79507 29.5588 8.39848 29.5588H21.259C21.0882 28.9231 20.9886 28.259 20.9886 27.5711C20.9934 23.3112 24.4564 19.8434 28.7211 19.8434ZM26.1546 12.2391H29.5038V15.4649H26.1546V12.2391ZM20.13 12.2391H23.4791V15.4649H20.13V12.2391ZM11.4345 26.6129H8.08539V23.3871H11.4345V26.6129ZM11.4345 21.0389H8.08539V17.8131H11.4345V21.0389ZM11.4345 15.4649H8.08539V12.2391H11.4345V15.4649ZM17.4592 26.6129H14.1101V23.3871H17.4592V26.6129ZM17.4592 21.0389H14.1101V17.8131H17.4592V21.0389ZM17.4592 15.4649H14.1101V12.2391H17.4592V15.4649ZM20.13 17.8131H23.4791V21.0389H20.13V17.8131Z"
                      fill="#F58465"
                    />
                  </svg>
                </div>
                <p>Booking Lapangan</p>
              </div>
            </a>
          </div>
        </section>
        <hr className="my-8" />
        <section>
          <h2 className="text-xl font-semibold">Lapangan Dikota Palembang</h2>

          <div className="mt-5 flex flex-wrap gap-4">
            <div className="shadow rounded-lg overflow-hidden max-w-72 bg-white">
              <div className="aspect-video w-72 bg-stone-600"></div>
              <div className="px-2 py-4 border-t-4 border-t-secondary">
                <div className="flex flex-col gap-1.5">
                  <div>
                    <span className="capsule">Lapangan Bola Kaki</span>
                  </div>
                  <h3 className="font-semibold">Lapangan Bola Kamboja</h3>
                  <p className="text-gray-500">Mayor Santoso, Palembang</p>
                </div>
                <div className="mt-4">
                  <a className="flex justify-between font-semibold text-secondary">
                    <div>Lihat Lapangan</div>
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_7211_77)">
                          <path
                            d="M5.02679 13.0537H16.4961L11.4853 18.1956C11.0849 18.6065 11.0849 19.2809 11.4853 19.6918C11.8858 20.1027 12.5326 20.1027 12.9331 19.6918L19.6997 12.7481C20.1001 12.3372 20.1001 11.6734 19.6997 11.2624L12.9434 4.3082C12.5429 3.89727 11.896 3.89727 11.4956 4.3082C11.0951 4.71913 11.0951 5.38294 11.4956 5.79388L16.4961 10.9463H5.02679C4.46206 10.9463 4 11.4205 4 12C4 12.5795 4.46206 13.0537 5.02679 13.0537Z"
                            fill="#F58465"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7211_77">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow rounded-lg overflow-hidden max-w-72 bg-white">
              <div className="aspect-video w-72 bg-stone-600"></div>
              <div className="px-2 py-4 border-t-4 border-t-secondary">
                <div className="flex flex-col gap-1.5">
                  <div>
                    <span className="capsule">Lapangan Bola Kaki</span>
                  </div>
                  <h3 className="font-semibold">Lapangan Bola Kamboja</h3>
                  <p className="text-gray-500">Mayor Santoso, Palembang</p>
                </div>
                <div className="mt-4">
                  <a className="flex justify-between font-semibold text-secondary">
                    <div>Lihat Lapangan</div>
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_7211_77)">
                          <path
                            d="M5.02679 13.0537H16.4961L11.4853 18.1956C11.0849 18.6065 11.0849 19.2809 11.4853 19.6918C11.8858 20.1027 12.5326 20.1027 12.9331 19.6918L19.6997 12.7481C20.1001 12.3372 20.1001 11.6734 19.6997 11.2624L12.9434 4.3082C12.5429 3.89727 11.896 3.89727 11.4956 4.3082C11.0951 4.71913 11.0951 5.38294 11.4956 5.79388L16.4961 10.9463H5.02679C4.46206 10.9463 4 11.4205 4 12C4 12.5795 4.46206 13.0537 5.02679 13.0537Z"
                            fill="#F58465"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7211_77">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Berkas Terbaru</h2>
            <a className="text-lg font-medium text-secondary">Lihat Semua</a>
          </div>

          <div className="rounded-lg max-w-[400px] p-5 bg-stone shadow-lg bg-white">
            <div className="relative">
              <div className="absolute start-1 top-1">
                <svg
                  className="scale-125"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1105 10.3961C12.2367 10.3961 10.7211 11.9165 10.7211 13.7856C10.7211 15.6594 12.2367 17.175 14.1105 17.175C15.9843 17.175 17.5 15.6594 17.5 13.7856C17.5 11.9165 15.9843 10.3961 14.1105 10.3961ZM14.1105 16.4255C12.6518 16.4255 11.4706 15.2443 11.4706 13.7856C11.4706 12.3268 12.6518 11.1456 14.1105 11.1456C15.5693 11.1456 16.7505 12.3268 16.7505 13.7856C16.7505 15.2443 15.5693 16.4255 14.1105 16.4255ZM15.5194 3.94924C15.5194 3.14991 14.8719 2.5 14.0702 2.5H3.94924C3.14991 2.5 2.5 3.14753 2.5 3.94924V4.97154H15.5194V3.94924ZM10.9986 3.91841H7.02087C6.92125 3.91841 6.84061 3.83776 6.84061 3.73814C6.84061 3.63852 6.92125 3.5555 7.02087 3.5555H10.9986C11.0982 3.5555 11.1812 3.63615 11.1812 3.73814C11.1812 3.83776 11.0982 3.91841 10.9986 3.91841Z"
                    fill="#6EAA44"
                  />
                  <path
                    d="M15.6001 13.648H14.5446C14.5043 13.5199 14.4118 13.4179 14.2908 13.3657V11.8003C14.2908 11.7006 14.2102 11.6176 14.1082 11.6176C14.0085 11.6176 13.9279 11.6983 13.9279 11.8003V13.3657C13.7642 13.4369 13.6504 13.5982 13.6504 13.7879C13.6504 14.0417 13.8567 14.2481 14.1105 14.2481C14.2813 14.2481 14.4284 14.1532 14.5066 14.0133H15.6001C15.6997 14.0133 15.7827 13.9326 15.7827 13.8306C15.7827 13.7286 15.6997 13.648 15.6001 13.648ZM14.1105 9.9217C14.6086 9.9217 15.083 10.0189 15.5218 10.1921V5.44589H2.5V13.3325C2.5 14.1319 3.14753 14.7794 3.94924 14.7794H10.3795C10.2941 14.4615 10.2443 14.1295 10.2443 13.7856C10.2467 11.6556 11.9782 9.9217 14.1105 9.9217ZM12.8273 6.11952H14.5019V7.73242H12.8273V6.11952ZM9.81499 6.11952H11.4896V7.73242H9.81499V6.11952ZM5.46727 13.3064H3.79269V11.6935H5.46727V13.3064ZM5.46727 10.5194H3.79269V8.90652H5.46727V10.5194ZM5.46727 7.73242H3.79269V6.11952H5.46727V7.73242ZM8.4796 13.3064H6.80503V11.6935H8.4796V13.3064ZM8.4796 10.5194H6.80503V8.90652H8.4796V10.5194ZM8.4796 7.73242H6.80503V6.11952H8.4796V7.73242ZM9.81499 8.90652H11.4896V10.5194H9.81499V8.90652Z"
                    fill="#F58465"
                  />
                </svg>
              </div>
              <div className="px-8">
                <p className="font-semibold">Harry Maguire, S.Kom</p>
                <p className="text-gray-400 text-sm">
                  25 Januari 2024 &#x2022; 10:28
                </p>
              </div>
            </div>
            <hr className="my-2" />
            <div className="px-8">
              <p>Lapangan Bola Kamboja</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-400">Sesi 1 &#x2022; 06:00 - 12:00 </p>
                <span className="capsule text-sm">On Progress</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 bg-[#2976A3] mt-10 text-white flex justify-center gap-16">
        <div className="flex gap-1.5">
          <div>
            <img
              src="/img/logo-palembang.png"
              alt=""
              width={25}
              height={31}
              className="w-9 h-auto"
            />
          </div>
          <div>
            <p>Pemerintah</p>
            <p>Kota Palembang</p>
          </div>
        </div>

        <div className="flex gap-1.5">
          <div>
            <img
              src="/img/logo-kominfo.png"
              alt=""
              width={29}
              height={29}
              className="w-10 h-auto"
            />
          </div>
          <div>
            <p>Dinas Komunikasi dan</p>
            <p>Informatika Kota Palembang</p>
          </div>
        </div>

        <div>
          <img
            src="/img/logo-bse.png"
            alt=""
            width={88}
            height={35}
            className="w-28 h-auto"
          />
        </div>
      </footer>
    </>
  );
}
