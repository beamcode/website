import {
  Unix,
  Linux,
  Macos,
  Nodejs,
  Expressjs,
  Python,
  Tailwindcss,
  NextJS,
  Arduino,
} from "@/components/skillTags/tags"

export default function SkillsSection() {
  return (
    <div className="w-full">
      <div className="mb-3 w-full px-2 flex rounded-lg items-center gap-2 bg-primary-light dark:bg-primary-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          width={40}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            className="stroke-[#50649c] dark:stroke-[#809cbe]"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.25 11.25L1.75 8l3.5-3.25m5.5 6.5L14.25 8l-3.5-3.25"
          />
        </svg>
        <h1 className="text-2xl text-[#50649c] dark:text-[#809cbe]">SKILLS</h1>
      </div>

      <ol className="relative ml-2 border-l border-gray-200 dark:border-[gray]">
        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.5px] mt-[5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <svg width={20} viewBox="0 0 128 128">
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4" />
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
              </g>
            </svg>
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              ReactJS / React Native
            </h3>
          </div>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Development of various projects including responsive web-apps
            (dashboards, landing pages) and mobile apps using the React library.
          </p>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.6px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <svg width={20} viewBox="0 0 128 128">
              <path
                fill="#659AD3"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#03599C"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
              ></path>
            </svg>

            <h3 className="mr-2 flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              C
            </h3>

            <svg width={20} viewBox="0 0 128 128">
              <path
                fill="#D26383"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#9C033A"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
              ></path>
              <path
                d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"
                fill="#fff"
              ></path>
            </svg>

            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              C++
            </h3>
          </div>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            3 years of C and C++ developement through various projects including
            algorithms and game development.
          </p>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.6px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />

          <div className="mb-1 items-center gap-2">
            <Nodejs />
            <NextJS />
            <Tailwindcss />
            <Expressjs />
            <Python />
            <Unix />
            <Linux />
            <Macos />
            <Arduino />
          </div>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.6px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width={25}
            >
              <path
                fill="#CFD8DC"
                d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"
              />
              <path
                fill="#546E7A"
                d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"
              />
              <path
                fill="#546E7A"
                d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"
              />
              <path fill="#546E7A" d="M32 20H34V24H32z" />
              <path
                fill="#2196F3"
                d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"
              />
              <path fill="#3F51B5" d="M26 42L23 35 33 35z" />
              <path
                fill="#FFF"
                d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"
              />
            </svg>
            <h3 className="flex items-center whitespace-pre text-lg font-semibold text-gray-900 dark:text-gray-200">
              Bilingual Proficiency in
            </h3>
            <h3 className="whitespace-pre text-lg font-semibold text-[#e32d3d]">
              French
            </h3>
            <h3 className="flex items-center whitespace-pre text-lg font-semibold text-gray-900 dark:text-gray-200">
              /
            </h3>
            <h3 className="whitespace-pre text-lg font-semibold text-[#e32d3d]">
              English
            </h3>
          </div>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Expertise in Both Oral and Written Communication
          </p>
        </li>
      </ol>
    </div>
  )
}
