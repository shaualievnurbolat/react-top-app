
import styles from './HhData.module.css'
import cn from 'classnames'
import { Card } from '../Card/Card';
import RateIcon from './rate.svg'
import { HhDataProps } from './HhData.props';
import { priceRu } from '@/helpers/helpers';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon clasName={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon clasName={styles.filled} />
                        <RateIcon clasName={styles.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионалы</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon clasName={styles.filled} />
                        <RateIcon clasName={styles.filled} />
                        <RateIcon clasName={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
        
    );
}