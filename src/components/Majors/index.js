import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';
import HeadTittle from '~/components/HeadTittle';
import './Majors.scss';

function Majors() {
    return (
        <Container fluid className="wrapper-majors">
            <div style={{ padding: '30px' }} className="majors-container container-lg">
                <Row className="p-0">
                    <Col className="p-0 col-12 col-md-6 col-xl-4">
                        <Card
                            className="border-0 rounded-0"
                            style={{ color: 'black', height: 200 }}
                        >
                            <HeadTittle title={'CHẤT LƯỢNG ĐÀO TẠO'} />
                            <CardText>
                                Với triết lý đào tạo “Thực học – Thực nghiệp”, Trường hướng tới đào
                                tạo nguồn nhân lực chất lượng cao với phương pháp giảng dạy qua dự
                                án thật.
                            </CardText>
                        </Card>
                    </Col>
                    <Col className="p-0 col-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src={require('~/assets/images/edu-1.jpg')}
                                style={{
                                    height: 200,
                                    color: 'white',
                                    objectFit: 'cover',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">KHOA CƠ BẢN</CardTitle>
                                <ul>
                                    <li>Đội ngũ giáo viên</li>
                                    <li>Hoạt động chuyên môn</li>
                                    <li>Học sinh tiêu biểu</li>
                                </ul>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src={require('~/assets/images/edu-3.jpg')}
                                style={{
                                    height: 200,
                                    color: 'white',
                                    objectFit: 'cover',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">KHOA Y</CardTitle>
                                <ul>
                                    <li>Đội ngũ giáo viên</li>
                                    <li>Hoạt động chuyên môn</li>
                                    <li>Học sinh tiêu biểu</li>
                                </ul>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src={require('~/assets/images/edu-2.jpg')}
                                style={{
                                    height: 200,
                                    color: 'white',
                                    objectFit: 'cover',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">KHOA ĐIỀU DƯỠNG - KTYH</CardTitle>
                                <ul>
                                    <li>Đội ngũ giáo viên</li>
                                    <li>Hoạt động chuyên môn</li>
                                    <li>Học sinh tiêu biểu</li>
                                </ul>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src={require('~/assets/images/edu-4.jpg')}
                                style={{
                                    height: 200,
                                    color: 'white',
                                    objectFit: 'cover',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">KHOA DƯỢC</CardTitle>
                                <ul>
                                    <li>Đội ngũ giáo viên</li>
                                    <li>Hoạt động chuyên môn</li>
                                    <li>Học sinh tiêu biểu</li>
                                </ul>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col className="p-0 col-12 col-md-6 col-xl-4">
                        <Card className="border-0 rounded-0">
                            <CardImg
                                className="rounded-0"
                                alt="Card image cap"
                                src={require('~/assets/images/edu-1.jpg')}
                                style={{
                                    height: 200,
                                    color: 'white',
                                    objectFit: 'cover',
                                }}
                                width="100%"
                            />
                            <CardImgOverlay className='rounded-0"'>
                                <CardTitle tag="h5">PHÒNG KHẢO THÍ VÀ KĐCL</CardTitle>
                                <ul>
                                    <li>Chất lượng cán bộ</li>
                                    <li>Hoạt động chuyên môn</li>
                                </ul>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Majors;
