import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-500 text-white mt-7">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
<Link to={`/`}>
                    <img className="h-16 rounded" src="https://i.ibb.co/Ltk5Hxr/1.png" alt="" />
</Link>
                </div>
{/* 
                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                    itaque neque.
                </p> */}

                <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <Link className="text-white transition hover:text-white/75" to={'/'}>প্রধান পাতা </Link>

                    </li>
                    <li>
                        <Link className="text-white transition hover:text-white/75" to={'/about'}>পরিচিতি</Link>

                    </li>

                    <li>
                        <Link className="text-white transition hover:text-white/75" to={'/about'}>স্বেচ্ছাসেবী</Link>
                    </li>

                    <li>
                        <Link className="text-white transition hover:text-white/75" to={'/about'}>সনদ</Link>
                    </li>

                </ul>

                <ul className="my-5 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="https://www.facebook.com/friendsfear/"
                            rel="friendsfear/"
                            target="_blank"
                            className="text-white transition hover:text-white/75"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>


                </ul>
                <div className="mt-2 border-t border-gray-100 pt-4">
      <p className="text-center text-xs/relaxed text-white">
        © Ulipur Book Fear 2024. All rights reserved.

        <br />

        Developed by :
        <a target='_blank' href="https://www.linkedin.com/in/ataher-ali/" className="text-white mx-1 underline transition hover:text-white/75"> Ataher Ali </a>
        | Project Code :
        <a href="https://github.com/ataher-ali/Ulipur_Book_Fair2024.git" className="mx-1 text-white underline transition hover:text-white/75"
          > Github </a>.
      </p>
    </div>
            </div>
            
        </footer>
    );
};

export default Footer;