'use client';

import { FC } from 'react';
import styles from '@/components/Header/header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { navBarLinks, HeaderNavLinks } from '@/constants/header-links';
import { usePathname } from 'next/navigation';

export const Header: FC = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Image
            src='./favicon/vantela.svg'
            width={119}
            height={70}
            alt='Vantela Logo'
          />
        </div>
        <nav className={styles.header__navBar}>
          <ul className={styles.header__menu}>
            {navBarLinks.map((link: HeaderNavLinks) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    className={isActive ? styles.active : styles.menu__listItem}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.nav__icons}>
            <button className={styles.nav__icon}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.99976 -3.05176e-05C15.5228 -3.05176e-05 19.9998 4.47697 19.9998 9.99997C19.9998 15.523 15.5228 20 9.99976 20C8.17793 20.0028 6.3903 19.5054 4.83176 18.562L1.79976 19.454C1.62568 19.5052 1.44102 19.5086 1.26518 19.4637C1.08935 19.4189 0.928836 19.3275 0.800524 19.1992C0.672212 19.0709 0.580839 18.9104 0.536009 18.7345C0.491179 18.5587 0.494549 18.3741 0.545765 18.2L1.43776 15.168C0.494723 13.6093 -0.00265818 11.8217 -0.000235331 9.99997C-0.000235331 4.47697 4.47676 -3.05176e-05 9.99976 -3.05176e-05ZM9.99976 1.99997C8.56739 1.99971 7.16122 2.38403 5.92809 3.11278C4.69497 3.84154 3.68012 4.88801 2.98953 6.14291C2.29893 7.39781 1.95793 8.81511 2.00212 10.2468C2.04632 11.6785 2.47409 13.0721 3.24076 14.282C3.46776 14.639 3.54576 15.089 3.41776 15.522L2.97676 17.023L4.47776 16.582C4.91076 16.454 5.36076 16.532 5.71776 16.759C6.76609 17.4228 7.95445 17.8336 9.18891 17.959C10.4234 18.0844 11.6701 17.921 12.8305 17.4816C13.9909 17.0422 15.0332 16.3389 15.8749 15.4273C16.7167 14.5156 17.3349 13.4207 17.6806 12.2291C18.0264 11.0374 18.0902 9.78165 17.867 8.56107C17.6438 7.3405 17.1398 6.18857 16.3948 5.19635C15.6497 4.20412 14.6841 3.3988 13.5742 2.84405C12.4643 2.2893 11.2406 2.00032 9.99976 1.99997ZM6.49976 8.49997C6.89759 8.49997 7.27912 8.658 7.56042 8.93931C7.84173 9.22061 7.99976 9.60214 7.99976 9.99997C7.99976 10.3978 7.84173 10.7793 7.56042 11.0606C7.27912 11.3419 6.89759 11.5 6.49976 11.5C6.10194 11.5 5.72041 11.3419 5.4391 11.0606C5.1578 10.7793 4.99976 10.3978 4.99976 9.99997C4.99976 9.60214 5.1578 9.22061 5.4391 8.93931C5.72041 8.658 6.10194 8.49997 6.49976 8.49997ZM13.4998 8.49997C13.8976 8.49997 14.2791 8.658 14.5604 8.93931C14.8417 9.22061 14.9998 9.60214 14.9998 9.99997C14.9998 10.3978 14.8417 10.7793 14.5604 11.0606C14.2791 11.3419 13.8976 11.5 13.4998 11.5C13.1019 11.5 12.7204 11.3419 12.4391 11.0606C12.1578 10.7793 11.9998 10.3978 11.9998 9.99997C11.9998 9.60214 12.1578 9.22061 12.4391 8.93931C12.7204 8.658 13.1019 8.49997 13.4998 8.49997Z'
                  fill='#1F3E97'
                />
              </svg>
              <span className={styles.counter__icon}>0</span>
            </button>
            <button className={styles.nav__icon}>
              <svg
                style={{ position: 'relative', bottom: 2 }}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.6146 10.8191 5.02505 10.0358 4.61824C9.25245 4.21144 8.38265 3.99938 7.5 4Z'
                  stroke='#1F3E97'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span className={styles.counter__icon}>0</span>
            </button>
            <button className={styles.nav__icon}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.25 6H16.5C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6H3.75C3.35218 6 2.97064 6.15804 2.68934 6.43934C2.40804 6.72064 2.25 7.10218 2.25 7.5V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V7.5C21.75 7.10218 21.592 6.72064 21.3107 6.43934C21.0294 6.15804 20.6478 6 20.25 6ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H9C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM20.25 18.75H3.75V7.5H7.5V9C7.5 9.19891 7.57902 9.38968 7.71967 9.53033C7.86032 9.67098 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.67098 8.78033 9.53033C8.92098 9.38968 9 9.19891 9 9V7.5H15V9C15 9.19891 15.079 9.38968 15.2197 9.53033C15.3603 9.67098 15.5511 9.75 15.75 9.75C15.9489 9.75 16.1397 9.67098 16.2803 9.53033C16.421 9.38968 16.5 9.19891 16.5 9V7.5H20.25V18.75Z'
                  fill='#1F3E97'
                  stroke='#1F3E97'
                  stroke-width='0.5'
                />
              </svg>
              <span className={styles.counter__icon}>0</span>
            </button>
          </div>
          <div className={styles.nav__buttonsBlock}>
            <button type='button' className={styles.nav__signIn}>
              Sign Up
            </button>
            <button type='button' className={styles.nav__signUp}>
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};