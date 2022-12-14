// HOME
import Home from '~/pages/Home';
import GioithieuPage from '~/pages/Gioithieu';
import PhongbanPage from '../pages/Phongban';
import Tintuc from '~/pages/Tintuc';
import TintucPage from '~/pages/Tintuc/TintucPage';
import Dangkytuyensinh from '~/pages/Dangkytuyensinh';
import Dangkyhuongnghiep from '~/pages/Dangkyhuongnghiep';
import Lienhe from '~/pages/Lienhe';
import Hoidap from '~/pages/Hoidap';
// OTHER
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// ADMIN
import QtTrangchu from '~/pages/Quantri/QtTrangchu';

// LAYOUT
import { TintucLayout, QuantriLayout } from '~/layouts';

const publicRoute = [
    // TRANG CHU
    { path: '/', component: Home },
    // GIOI THIEU
    { path: '/gioithieu/:slug', component: GioithieuPage, layout: TintucLayout },
    // PHONG BAN
    { path: '/phongban/:slug', component: PhongbanPage, layout: TintucLayout },
    //
    { path: '/tintuc', component: Tintuc },
    { path: '/tintuc/:slug', component: TintucPage },
    // Chuong trinh dao tao
    { path: '/profile', component: Profile },
    { path: '/hoidap', component: Hoidap },
    { path: '/search', component: Search },
    { path: '/dangkytuyensinh', component: Dangkytuyensinh },
    { path: '/dangkyhuongnghiep', component: Dangkyhuongnghiep },
    // LIEN HE
    { path: '/lienhe', component: Lienhe },
    // Quan tri
    { path: '/quantri', component: QtTrangchu, layout: QuantriLayout },
];

const privateRoute = [];

export { publicRoute, privateRoute };
