import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/images/logo.png';

const footerList = {
  contacts: [
    {
      link: './',
      label: '4967 Sardis Sta, Victoria 8007, Montreal.'
    },
    {
      link: './',
      label: '+1 246-345-0695'
    },
    {
      link: './',
      label: 'info@learnup.com'
    }
  ],
  navigation: [
    {
      link: './',
      label: 'About Us'
    },
    {
      link: './',
      label: 'FAQs Page'
    },
    {
      link: './',
      label: 'Checkout'
    },
    {
      link: './',
      label: 'Contact'
    },
    {
      link: './',
      label: 'Blog'
    }
  ],
  categories: [
    {
      link: './',
      label: 'Designing'
    },
    {
      link: './',
      label: 'Nusiness'
    },
    {
      link: './',
      label: 'Software'
    },
    {
      link: './',
      label: 'WordPress'
    },
    {
      link: './',
      label: 'PHP'
    }
  ],
  support: [
    {
      link: './',
      label: 'Documentation'
    },
    {
      link: './',
      label: 'Live Chat'
    },
    {
      link: './',
      label: 'Mail Us'
    },
    {
      link: './',
      label: 'Privacy'
    },
    {
      link: './',
      label: 'Faqs'
    }
  ],
  socials: [
    {
      link: './',
      icon: 'facebook'
    },
    {
      link: './',
      icon: 'twitter'
    },
    {
      link: './',
      icon: 'instagram'
    }
  ]
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top px-44 mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <ul className="footer-list">
              {footerList.contacts.map((item) => {
                return (
                  <li className="footer-list-item contact">
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-3">
            <h4 className="footer-list-title">Navigations</h4>
            <ul className="footer-list">
              {footerList.navigation.map((item) => {
                return (
                  <li className="footer-list-item">
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-3">
            <h4 className="footer-list-title">New Categories</h4>
            <ul className="footer-list">
              {footerList.navigation.map((item) => {
                return (
                  <li className="footer-list-item">
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-3">
            <h4 className="footer-list-title">Help & Support</h4>
            <ul className="footer-list">
              {footerList.support.map((item) => {
                return (
                  <li className="footer-list-item">
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container px-44 flex justify-between">
          <h4 className="copyright">© 2020 LearnUp. Designd By Themezhub.</h4>
          <ul className="socials-list">
            {footerList.socials.map((item) => {
              return (
                <li className="socials-item">
                  <Link to={item.link}>
                    <span className={`icon-${item.icon} size-icon-2`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
