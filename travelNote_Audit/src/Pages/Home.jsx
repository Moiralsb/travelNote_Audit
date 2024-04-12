import React, { useState, useEffect } from 'react';
import './home.css';
import styles from './home.module.css';
import AuditCard from '../components/AuditCard';
import Carousel from '../components/Carousel';
import { fetchPostsSym } from '../api/fetchPosts';
import useUserSym from '../components/useUserSym';

const images = [
    'https://img2.baidu.com/it/u=2539872750,2513176690&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    'https://q2.itc.cn/q_70/images03/20240312/519714591a8241b884f21e37b54d4319.jpeg',
    'https://k.sinaimg.cn/n/sinakd20114/448/w1024h1024/20240331/64a9-e8a4624643503fa533d1f5aec4589152.jpg/w700d1q75cms.jpg',
    'https://pic.netbian.com/uploads/allimg/230922/164533-16953723335065.jpg',
    'https://pic.netbian.com/uploads/allimg/240320/005356-1710867236fd33.jpg',
    'https://pic.netbian.com/uploads/allimg/231220/232535-17030859356f46.jpg',
    'https://pic.netbian.com/uploads/allimg/231214/003641-1702485401dd27.jpg',
    'https://pic.netbian.com/uploads/allimg/230912/001206-1694448726236e.jpg',
    'https://pic.netbian.com/uploads/allimg/230811/100843-16917197238ccc.jpg',
    'https://pic.netbian.com/uploads/allimg/231117/232801-1700234881a084.jpg',
    'https://pic.netbian.com/uploads/allimg/230525/000822-1684944502d16d.jpg',
    'https://pic.netbian.com/uploads/allimg/230505/113804-168325788475d1.jpg',
];

export default function Home() {

    const [travelnotes, setTravelnotes] = useState([]);
    const [filter, setFilter] = useState('');
    const { userSym, loading } = useUserSym();

    useEffect(() => {
        const fetchAndSetPostsSym = async () => {
            const fetchedPostsSym = await fetchPostsSym();
            setTravelnotes(fetchedPostsSym);
        };
        fetchAndSetPostsSym();

    }, []);

    if (loading) {
        return <div>Loading user information...</div>;
    };

    function handleLogout() {
        localStorage.removeItem('userSymToken');
        window.location.href = '/login';
    };

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setFilter(selectedValue); // 更新状态以触发筛选
        if (selectedValue === '') {
            //onFilterChange(selectedValue); // 发送请求到后端进行筛选
            alert('筛选个der');
        }
        if (selectedValue === 'approved') {
            //onFilterChange(selectedValue); // 发送请求到后端进行筛选
            alert('筛选通过的');
        }
        if (selectedValue === 'rejected') {
            //onFilterChange(selectedValue); // 发送请求到后端进行筛选
            alert('筛选拒绝的');
        }
        if (selectedValue === 'deleted') {
            //onFilterChange(selectedValue); // 发送请求到后端进行筛选
            alert('筛选删除的');
        }
    };

    return (
        <>
            <div className='homecontainer'>
                <div className='left'>
                    <h1>游记审核系统</h1>
                    <div>
                        <Carousel images={images} />
                    </div>
                    <div>
                        <p>用户昵称：{userSym?.usernameSym}</p>
                        <p>用户身份：
                            {userSym?.auditSymRole === 1 ? '管理员' : '审核人员'}
                        </p>
                    </div>
                    <button onClick={handleLogout}>退出登录</button>
                </div>
                <div className='right'>
                    <div className={styles.container}>
                        {/* <div className={styles.searcharea}>
                            <input type="text" placeholder="搜索" />
                            <button>搜索</button>
                        </div> */}
                        <div className={styles.filterarea}>
                            <label>筛选：</label>
                            <select value={filter} onChange={handleFilterChange}>
                                <option value="">全部</option>
                                <option value="approved">通过</option>
                                <option value="rejected">拒绝</option>
                                {userSym?.auditSymRole === 1 && (<option value="deleted">删除</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <div>
                                <p>审核卡片</p>
                                { }
                                <AuditCard Data={travelnotes} auditSymRole={userSym?.auditSymRole} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}