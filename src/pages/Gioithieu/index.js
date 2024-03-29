import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardImg, Col, Container, Row } from 'reactstrap';
import { bucket } from '~/cosmicjs';
import Sidebar from '~/layouts/LayoutElements/Sidebar';
import HeadTittle from '~/components/HeadTittle';

function GioithieuPage() {
    let { slug } = useParams();
    const [contents, setContents] = useState();
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    useEffect(() => {
        (async () => {
            const data = await bucket.objects
                .find({
                    type: 'gioithieu',
                    slug: slug,
                })
                .props('title,content');

            //console.log(data.objects[0]);
            setContents(data.objects[0]);
        })();
    }, []);

    const menuSidebar = [
        {
            name: 'Giới thiệu chung',
            link: '/gioithieu/gioi-thieu-chung',
            sub: null,
        },
        {
            name: 'Chức năng nhiệm vụ',
            link: '/gioithieu/chuc-nang-nhiem-vu',
            sub: null,
        },
        {
            name: 'Cơ cấu tổ chức',
            link: '/gioithieu/co-cau-to-chuc',
            sub: null,
        },
        {
            name: 'Công khai chất lượng',
            link: '/gioithieu/cong-khai-chat-luong',
            sub: null,
        },
    ];
    return (
        <Container className="p-0">
            <Row>
                <Col className="col-12 col-lg-9 text-justify p-2">
                    {contents !== undefined ? (
                        <div>
                            <HeadTittle title={contents.title} />
                            <div dangerouslySetInnerHTML={{ __html: contents.content }} />
                        </div>
                    ) : (
                        <></>
                    )}
                </Col>
                <Col className="col-12 col-lg-3 d-none d-lg-block p-2 position-relative">
                    <Sidebar
                        toggle={toggleSidebar}
                        isOpen={sidebarIsOpen}
                        menuSidebar={menuSidebar}
                        isHeader={false}
                        title="DANH MỤC"
                    />
                    <br />
                    <CardImg src={require('~/assets/images/hoatdong/10.jpg')} alt="SINH VIEN" />
                </Col>
            </Row>
        </Container>
    );
}

export default GioithieuPage;
