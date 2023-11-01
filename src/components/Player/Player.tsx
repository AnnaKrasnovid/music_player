import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Sound from '../Sound/Sound';

import ImagePlayer from '../../assets/images/risian.png'

import styles from './Player.module.scss';

function Player() {

    function handleClick() {

    }

    return (
        <div className={styles['player']}>
            <div className={styles['player__tools']}>
                <Button type='prev' callback={handleClick} />
                <Button type='play' callback={handleClick} />
                <Button type='next' callback={handleClick} />
            </div>
            <div className={styles['player__body']}>
                <Sound />
                <div>
                    <p>Name</p>
                </div>
                <div className={styles['track']}>
                    <Input />
                </div>
            </div>
            <div className={styles['player__img']}>
                {/* <img src={ImagePlayer} alt="" className={styles['img']}/> */}
            </div>
        </div>
    )
}

export default Player;