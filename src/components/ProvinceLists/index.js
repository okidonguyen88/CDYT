import { useEffect, useState } from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';

const ProvinceLists = (args) => {
    const [tinh, setTinh] = useState(() => {
        return {
            isLoaded: false,
            items: [],
            choosenCode: 0,
        };
    });

    const onTinhChange = (e) => {
        tinh.choosenCode = e.target.value;
        if (tinh.choosenCode !== 0) {
            fetch(`https://provinces.open-api.vn/api/d`)
                .then((res) => res.json())
                .then((json) => {
                    setQuanHuyen({
                        items: json.filter((p) => p.province_code == tinh.choosenCode),
                        isLoaded: true,
                        choosenCode: 0,
                    });

                    setXaphuong({
                        isLoaded: false,
                        items: [],
                        choosenCode: 0,
                    });
                });
        }
    };

    const [quanHuyen, setQuanHuyen] = useState(() => {
        return {
            isLoaded: false,
            items: [],
            choosenCode: 0,
        };
    });

    const onquanHuyenChange = (e) => {
        quanHuyen.choosenCode = e.target.value;
        if (quanHuyen.choosenCode !== 0) {
            fetch(`https://provinces.open-api.vn/api/w`)
                .then((res) => res.json())
                .then((json) => {
                    setXaphuong({
                        items: json.filter((p) => p.district_code == quanHuyen.choosenCode),
                        isLoaded: true,
                        choosenCode: 0,
                    });
                });
        }
    };

    const [xaPhuong, setXaphuong] = useState(() => {
        return {
            isLoaded: false,
            items: [],
            choosenCode: 0,
        };
    });

    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/p/')
            .then((res) => res.json())
            .then((json) => {
                setTinh({
                    items: json,
                    isLoaded: true,
                    choosenCode: 0,
                });
            });
    }, []);

    return (
        <Row>
            <Col md={4}>
                <FormGroup>
                    <Input id="tinh" name="select" type="select" onChange={onTinhChange}>
                        <option value="">Tỉnh</option>
                        {tinh.isLoaded === true ? (
                            tinh.items.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.name}
                                </option>
                            ))
                        ) : (
                            <></>
                        )}
                    </Input>
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Input id="quanHuyen" name="select" type="select" onChange={onquanHuyenChange}>
                        <option value="">TP, Quận, Huyện</option>
                        {quanHuyen.isLoaded === true ? (
                            quanHuyen.items.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.name}
                                </option>
                            ))
                        ) : (
                            <></>
                        )}
                    </Input>
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Input id="xaPhuong" name="select" type="select">
                        <option value="">Xã, Phường</option>
                        {xaPhuong.isLoaded === true ? (
                            xaPhuong.items.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.name}
                                </option>
                            ))
                        ) : (
                            <></>
                        )}
                    </Input>
                </FormGroup>
            </Col>
        </Row>
    );
};

export default ProvinceLists;
