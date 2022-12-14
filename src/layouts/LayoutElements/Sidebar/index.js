import { useState } from 'react';
import { NavItem, NavLink, Nav, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ({ isOpen, menuSidebar, isHeader = true, title = 'Danh mục' }) => (
    <div className="admin-sidebar ">
        <div className={isOpen ? 'sidebar is-open' : 'sidebar'}>
            {isHeader ? (
                <div className="sidebar-header">
                    <img width={'250px'} src={require('~/assets/images/logo-02.png')} alt="LOGO" />
                </div>
            ) : (
                ''
            )}
            <div className="side-menu p-2">
                <h4 className='border-bottom'>{title}</h4>
                <Nav vertical className="list-unstyled pb-3">
                    {menuSidebar.map((menuItem, index) => (
                        <NavItem key={index} className="d-flex align-items-center">
                            <i className="bi bi-caret-right"></i>
                            {menuItem.sub !== null ? (
                                <SubMenu title={menuItem.name} items={menuItem.sub} />
                            ) : (
                                <NavLink href={menuItem.link}>{menuItem.name}</NavLink>
                            )}
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    </div>
);
const SubMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { title, items } = props;

    return (
        <div>
            <NavItem onClick={toggle} className={!collapsed ? 'menu-open' : ''}>
                <NavLink>
                    <i className="bi bi-contact"></i>
                    {title}
                    <i className="dropdown-toggle" style={{ float: 'right' }} />
                </NavLink>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={!collapsed ? 'items-menu mb-1' : 'items-menu'}
            >
                {items.map((item, index) => (
                    <NavItem key={index} className="pl-4">
                        <NavLink href={item.target}>{item.title}</NavLink>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
};

export default Sidebar;
