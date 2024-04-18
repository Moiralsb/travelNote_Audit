import { useState } from 'react';
import { passPostSym } from '../api/passPostSym';
import { rejectPostSym } from '../api/rejectPostSym';
import { deletePostSym } from '../api/deletePostSym';
import styles from './auditcard.module.css'

export default function AuditCard({ Data, auditSymRole }) {
    const [isreject, setIsreject] = useState(false);
    const [rejectReason, setRejectReason] = useState('');

    const items = Data;

    const maxLengthTitle = 50;
    const maxLengthContent = 500;

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const handleTravelnotesPass = async (auditStatus, id) => {
        try {
            const passedPostSym = await passPostSym(id);
            console.log(passedPostSym);
            if (passedPostSym) {
                alert("审核通过");
                window.location.reload();
            } else {
                alert("审核失败");
            }
        } catch (error) {
            console.error('出现错误,审核失败:', error);
        }
    };

    const handleTravelnotesReject = () => {
        setIsreject(true);
    };

    const handleRejectInputChange = (e) => {
        setRejectReason(e.target.value);
    };

    const handleSubmitReject = async (id) => {
        if (rejectReason.trim() === '') {
            alert('还没有填写拒绝理由哦~');
        } else {
            try {
                const rejectedPostSym = await rejectPostSym(id, rejectReason);
                console.log(rejectedPostSym);
                if (rejectedPostSym) {
                    alert("审核拒绝通过");
                    window.location.reload();
                } else {
                    alert("审核拒绝失败");
                }
            } catch (error) {
                console.error('出现错误,审核拒绝失败:', error);
            }
            setIsreject(false);
        }
    }

    const handleTravelnotesDelete = async (auditStatus, id) => {
        alert(`只有状态${auditStatus}=2时才能执行操作,通过数据库根据${id}把item.logicalDeletion设置为1`);
        try {
            const deletedPostSym = await deletePostSym(id);
            console.log(deletedPostSym);
            if (deletedPostSym) {
                alert("逻辑删除成功");
                window.location.reload();
            } else {
                alert("逻辑删除失败");
            }
        } catch (error) {
            console.error('出现错误,逻辑删除失败:', error);
        }
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item._id} className={styles.auditcardCard}>
                    <div className={styles.auditcardbox}>
                        <div className={styles.auditcardleft}>
                            <div>
                                {/* <Carousel images={images} /> */}
                                <img
                                    src={item.travenotePictures}
                                    className={styles.imageshow}
                                />
                            </div>
                            <div>
                                <h3
                                    // className={styles.traveltitleshow}
                                    className={styles.textcontainer}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.travelnoteTitle.length > maxLengthTitle ? item.travelnoteTitle.slice(0, maxLengthTitle) + '...' : item.travelnoteTitle}
                                </h3>
                                <p
                                    className={styles.travelcontentshow}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.travelnoteContent.length > maxLengthContent ? item.travelnoteContent.slice(0, maxLengthContent) + '...' : item.travelnoteContent}
                                </p>
                            </div>
                        </div>
                        <div className={styles.auditcardright}>
                            <p>审核状态：</p>
                            <div className={styles.auditstatus}>
                                <p>
                                {item.auditStatus === 0 ? '未审核' :
                                item.auditStatus === 1 ? '未通过' :
                                '已通过'}
                                </p>
                            </div>
                            <p>操作按钮：</p>
                            <div className={styles.auditbuttonshow}>
                                {/* 通过|拒绝|删除<br /> */}
                                <button className={styles.auditbutton}
                                    onClick={() => handleTravelnotesPass(item.auditStatus, item._id)}>通过</button>
                                <button className={styles.auditbutton}
                                    onClick={handleTravelnotesReject}>拒绝</button>
                                {auditSymRole===1 &&(<button className={styles.auditbutton}
                                    onClick={() => handleTravelnotesDelete(item.auditStatus, item._id)}>删除</button>
                                )}
                            </div>
                            {isreject && (
                            <div>
                                <input 
                                type='text'
                                placeholder='请输入拒绝理由'
                                value={rejectReason}
                                onChange={handleRejectInputChange}
                                />
                                <button onClick={() => handleSubmitReject(item._id)}>提交</button>
                                <button onClick={() => setIsreject(false)}>取消</button>
                            </div>)}
                        </div>
                    </div>
                    <p>id:{item._id}</p>
                    {item.auditStatus===1 && (
                    <span>拒绝理由:{item.rejectionReason}</span>
                    )}
                </div>
            ))}
        </div>
    );
}
