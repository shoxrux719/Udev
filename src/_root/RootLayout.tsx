import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { cn } from "@/lib/utils";

const RootLayout: React.FC = () => {
    const { i18n } = useTranslation();

    // Обработчик смены языка
    const handleChangeLanguage = (language: string): void => {
        i18n.changeLanguage(language);
    };

   

    return (
        <>
            <nav className="sticky flex container mx-auto justify-between items-center pt-6 pb-6 bg-transparent z-10">
                {/* Логотип и меню */}
                <div className="flex justify-between items-center gap-4">
                    <Link to="/" className="cursor-pointer">
                        <div className='flex justify-center items-center gap-2 w-[300px]'>
                            <h1 className='text-[48px] font-[700] text-[#ADFF00]'>ud</h1>
                            <h2 className='text-[24px] mt-3 font-[600] text-black'>UD academy</h2>
                        </div>
                    </Link>

                </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-black border-b-2 border-black" : "hover:text-gray-500"
              }
            >
              Biz haqimizda
            </NavLink>
            <ScrollLink
              to="Connect"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Подстрой под твой header
              className="hover:text-gray-500 cursor-pointer"
            >
              Bog'lanish
            </ScrollLink>

            <ScrollLink smooth={true} duration={500} to="comments">
              Izohlar
            </ScrollLink>

            <ScrollLink smooth={true} duration={500} to="Connect">
              Bizning jamoa
            </ScrollLink>

            <div className="w-[80px]">
              <Select
                onValueChange={handleChangeLanguage}
                defaultValue={i18n.language}
              >
                <SelectTrigger className="w-full h-[42px] flex items-center justify-between px-4 rounded-lg bg-gray-100">
                  <SelectValue placeholder={i18n.language.toUpperCase()} />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-lg rounded-lg">
                  <SelectItem value="uz">UZB</SelectItem>
                  <SelectItem value="ru">RUS</SelectItem>
                  <SelectItem value="en">ENG</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button className="w-[147px] h-[44px] bg-[#ADFF00] text-black font-semibold rounded-lg">
              Kurslar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="flex flex-col justify-between w-8 h-6"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span
                className={`block w-full h-[3px] bg-black rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-full h-[3px] bg-black rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-full h-[3px] bg-black rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="flex flex-col items-center gap-4">
              <NavLink
                to="/about"
                className="text-black text-lg"
                onClick={() => setIsOpen(false)}
              >
                BIZ HAQIMIZDA
              </NavLink>
              <NavLink
                to="/contact"
                className="text-black text-lg"
                onClick={() => setIsOpen(false)}
              >
                KONTAKT
              </NavLink>
              <NavLink
                to="/courses"
                className="text-black text-lg"
                onClick={() => setIsOpen(false)}
              >
                KURSLAR
              </NavLink>
              <button
                className="w-[147px] h-[44px] bg-[#ADFF00] text-black font-semibold rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Kurslar
              </button>
              <div className="w-[80px]">
                <Select
                  onValueChange={(value) => {
                    handleChangeLanguage(value);
                    setIsOpen(false);
                  }}
                  defaultValue={i18n.language}
                >
                  <SelectTrigger className="w-[85px] flex h-[42px] px-4 bg-gray-100 rounded-lg">
                    <SelectValue placeholder={i18n.language.toUpperCase()} />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg rounded-lg">
                    <SelectItem value="uz">UZB</SelectItem>
                    <SelectItem value="ru">RUS</SelectItem>
                    <SelectItem value="en">ENG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </nav>

            <div className="container mx-auto">
                <div>
                    <Outlet />
                </div>
            </div>


            {/* Футер */}
            <footer className="bg-[black] mt-8 text-center ">
                <div className=" flex container mx-auto justify-start gap-[100px] px-[100px] py-[50px]">
                    <div className="">
                        <h1 className="font-medium text-[32px] text-left text-white">Страницы</h1>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Главная</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">О нас</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Ивенты</p>
                    </div>
                    <div className="">
                        <h1 className="font-medium text-[32px] text-left text-white">Курсы</h1>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Frontend</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Backend</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Graphic Design</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Motion Design</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666] w-[155px]">Введение в кибербезопасность</p>
                    </div>
                    <div className="">
                        <h1 className="font-medium text-[32px] text-left text-white">Контакты</h1>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#67E542]">Telegram</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#67E542]">Instagram</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#67E542]">Instagram</p>
                    </div>
                    <div className="">
                        <h1 className="font-medium text-[32px] text-left text-white">Язык</h1>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Русский</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">O’zbekcha</p>
                        <p className="text-base font-medium leading-[20.4px] text-left text-[#666]">Узбекча</p>
                    </div>
                    <div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.533959441285!2d69.33484352143536!3d41.342359263887815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a58c63cbfd%3A0xcb882f0ad7acf773!2sRaqamli%20texnologiyalar%20vazirligi!5e1!3m2!1sru!2s!4v1738686768585!5m2!1sru!2s"
                            width="422"
                            height="210"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <p className="@apply text-xl font-medium leading-[25.5px] text-left text-white pt-[10px]">IT-компания Ustudy по адресу Ташкент,
                            улица Муминова, 7/2,  ️ +998 55 501 5353.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default RootLayout;
