import Table from 'react-bootstrap/Table';
import styles from './Schedule.module.scss';

export const Schedule = ()  =>{
  return (
    <>
    <div className={styles.moove} id="schedule">
         <h1 className={styles.ves}>Расписание Движения Линейного судна Морской Линии</h1>
         <h2 className={styles.sea}>(Большой порт Санкт-Петербург/БазисПорт-Морской порт Калининград/КМТП)</h2>
    </div>
  <div className={styles.tableresponsive}>
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Судно/Ship</th>
          <th>Рейс/Voyage</th>
          <th>Дедлайн/Cut Off</th>
          <th>Дата прихода/Eta</th>
          <th>Терминал/Terminal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0102</td>
          <td>28.10.2025</td>
          <td>29.10.2025</td>
          <td>КМТП</td>
        </tr>
      <tr>
          <td>т/х Зеленоградск</td>
         <td>ZL0103</td>
          <td>01.11.2025</td>
          <td>02.11.2025</td>
          <td>БазисПорт</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0104</td>
          <td>04.11.2025</td>
          <td>05.11.2025</td>
         <td>КМТП</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
         <td>ZL0105</td>
         <td>08.11.2025</td>
          <td>09.11.2025</td>
           <td>БазисПорт</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0106</td>
          <td>11.11.2025</td>
          <td>12.11.2025</td>
          <td>КМТП</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0107</td>
          <td>15.11.2025</td>
          <td>16.11.2025</td>
           <td>БазисПорт</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0108</td>
          <td>18.11.2025</td>
          <td>19.11.2025</td>
           <td>КМТП</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0109</td>
           <td>22.11.2025</td>
          <td>23.11.2025</td>
          <td>БазисПорт</td>
        </tr>
         <tr>
          <td>т/х Зеленоградск</td>
          <td>ZL0110</td>
          <td>25.11.2025</td>
          <td>26.11.2025</td>
          <td>КМТП</td>
        </tr>
         <tr>
           <td>т/х Зеленоградск</td>
         <td>ZL0111</td>
          <td>29.11.2025</td>
          <td>30.11.2025</td>
          <td>БазисПорт</td>
        </tr>
       
      </tbody>
    </Table> 
</div>
    <div className={styles.moove}>
        <h2 className={styles.ves}>К перевозке принимаются любые типы контейнерв.</h2>
        <h5 className={styles.sea}>Расписание может быть изменено без предварительного уведомления в зависимости от времени обработки судов в портах и реальном времени на переходахв зависимости от погодных условий</h5>
    </div>
    </>
  );
}

