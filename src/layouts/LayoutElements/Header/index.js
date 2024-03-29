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
    Col,
    Row,
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
                <div className="d-flex p-2 justify-content-between">
                    <div className={'hotline'}>
                        <i className="bi bi-telephone"></i>
                        <span>
                            {' '}
                            <a
                                href="tel:0262384578"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                Hotline: 02623.845.678{' '}
                            </a>
                        </span>
                    </div>

                    <div
                        className={'menu-top d-flex justify-content-end'}
                        // style={{ minWidth: '370px' }}
                    >
                        <div className={'menu-top-item ps-2'}>
                            <NavLink href="/sitemap.xml" target={'_blank'}>
                                <i className="bi bi-diagram-2"> </i>
                                <span className="d-none d-sm-inline-block"> Sitemap</span>
                            </NavLink>
                        </div>
                        <div className={'menu-top-item ps-2'}>
                            {/* <Login /> */}
                            <NavLink href="/dangnhap">
                                <i className="bi bi-door-open"> </i>
                                <span className="d-none d-sm-inline-block">Quản lý đào tạo</span>
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
                <Row className="align-items-center">
                    <Col className="col-12 col-lg-4">
                        <div
                            className={
                                'wrapper-logo d-flex justify-content-center align-items-center'
                            }
                        >
                            <img src={require('~/assets/images/logo-01.png')} alt="logo" />
                        </div>
                    </Col>
                    <Col></Col>
                    <Col className=" col-12 col-lg-5">
                        <div className={'wrapper-search'}>
                            <Form>
                                <FormGroup className="d-flex justify-content-center align-items-center">
                                    <div className="position-relative">
                                        <Input
                                            placeholder="Tìm kiếm"
                                            className="rounded-5"
                                            style={{ minWidth: '280px' }}
                                        />
                                        <i
                                            className="bi bi-search position-absolute"
                                            style={{
                                                right: '10px',
                                                top: '0px',
                                                cursor: 'pointer',
                                                fontSize: '1.5rem',
                                            }}
                                        />
                                    </div>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100066723495495"
                                        target={'_blank'}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <i
                                            className="bi bi-facebook d-none d-md-block"
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '1.5rem',
                                                paddingLeft: '20px',
                                            }}
                                        ></i>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=YGUGy5rJ3kU"
                                        target={'_blank'}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <i
                                            className="bi bi-youtube  d-none d-md-block"
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '1.5rem',
                                                paddingLeft: '20px',
                                            }}
                                        ></i>
                                    </a>

                                    <a
                                        href="tel:0262384578"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        {' '}
                                        <i
                                            className="bi bi-telephone  d-none d-md-block"
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '1.5rem',
                                                paddingLeft: '20px',
                                            }}
                                        ></i>
                                    </a>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                </Row>
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
