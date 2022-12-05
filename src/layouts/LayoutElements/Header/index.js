import React, { useState } from 'react';
import {
    Container,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import './Header.scss';

function Header() {
    return (
        <header className={'wrapper-header'}>
            <HeaderTop />
            <HeaderMiddle />
        </header>
    );
}

const HeaderTop = () => {
    return (
        <Container>
            <div className={'wrapper-top'}>
                <div className="d-flex p-2 justify-content-between justify-content-lg-around container-xl">
                    <div className={'hotline'}>
                        <i className="bi bi-telephone"></i>
                        <span> Hotline: 02623.845.678</span>
                    </div>
                    <div className={'text-running d-none d-lg-inline-block '}>
                        <marquee>
                            Chào mừng các bạn đã đến với Website Trường Cao Đẳng Y tế Đắk Lắk
                        </marquee>
                    </div>
                    <div
                        className={'menu-top d-flex justify-content-end'}
                        // style={{ minWidth: '370px' }}
                    >
                        <div className={'menu-top-item ps-2'}>
                            <Login />
                        </div>
                        <div className={'menu-top-item ps-2'}>
                            <NavLink href="/noibo/hoatdong">
                                <i className="bi bi-book"> </i>
                                <span className="d-none d-sm-inline-block"> CBCC</span>
                            </NavLink>
                        </div>
                        <div className={'menu-top-item ps-2'}>
                            <NavLink href="/sinhvien/hoatdong">
                                <i className="bi bi-person-lines-fill"> </i>
                                <span className="d-none d-sm-inline-block"> HSSV</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const HeaderMiddle = () => {
    return (
        <div className={'wrapper-middle'}>
            <Container>
                <div className={'wrapper-logo'}>
                    <img src={require('~/assets/images/logo-01.png')} />
                </div>
                <div className={'wrapper-search'}></div>
            </Container>
        </div>
    );
};

const Login = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div style={{ cursor: 'pointer' }}>
            <NavLink onClick={toggle}>
                <i className="bi bi-door-open"> </i>
                <span className="d-none d-sm-inline-block"> Đăng nhập</span>
            </NavLink>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Đăng nhập</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="student-fullname">Tên đăng nhập</Label>
                            <Input id="student-fullname" placeholder="Nhập tên đăng nhập" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="student-phone">Mật khẩu</Label>
                            <Input id="student-phone" placeholder="Nhập mật khẩu" type="password" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Đăng nhập
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Huỷ
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Header;
