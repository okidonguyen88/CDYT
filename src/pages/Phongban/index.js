import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardImg, Col, Container, Row } from 'reactstrap';
import { bucket } from '~/cosmicjs';
import Sidebar from '~/layouts/LayoutElements/Sidebar';
import HeadTittle from '~/components/HeadTittle';

function PhongbanPage() {
    let { slug } = useParams();
    const [contents, setContents] = useState();
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    useEffect(() => {
        (async () => {
            const data = await bucket.objects
                .find({
                    type: 'phongban',
                    slug: slug,
                })
                .props('title,content');

            //console.log(data.objects[0]);
            setContents(data.objects[0]);
        })();
    }, []);

    const menuSidebar = [
        // {
        //     name: 'Ban giám hiệu',
        //     link: '/phongkhoa/ban-giam-hieu',
        //     sub: null,
        // },
        {
            name: 'Phòng Tổ chức hành chính',
            link: '/phongkhoa/phong-to-chuc-hanh-chinh',
            sub: null,
        },
        {
            name: 'Phòng Đào tạo',
            link: '/phongkhoa/phong-dao-tao',
            sub: null,
        },
        {
            name: 'Phòng Tài chính kế toán',
            link: '/phongkhoa/phong-tai-chinh-ke-toan',
            sub: null,
        },
        {
            name: 'Phòng Công tác HSSV',
            link: '/phongkhoa/phong-cong-tac-hoc-sinh-sinh-vien',
            sub: null,
        },
        {
            name: 'Phòng Khảo thí và KĐCL',
            link: '/phongkhoa/phong-khao-thi-va-kiem-dinh-chat-luong',
            sub: null,
        },
        {
            name: 'Khoa Cơ bản',
            link: '/phongkhoa/khoa-khoa-hoc-co-ban',
            sub: null,
        },
        {
            name: 'Khoa Y',
            link: '/phongkhoa/khoa-y',
            sub: null,
        },
        {
            name: 'Khoa Điều dưỡng - KTYH',
            link: '/phongkhoa/khoa-dieu-duong-ktyh',
            sub: null,
        },
        {
            name: 'Khoa Dược',
            link: '/phongkhoa/khoa-duoc',
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

export default PhongbanPage;
