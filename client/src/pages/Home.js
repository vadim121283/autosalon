import React, {Fragment, useContext, useEffect} from 'react'
import { Revenues } from "../components/Revenues";
import { DatabaseContext } from '../context/database/databaseContext'
import { Loader } from '../components/Loader'
import { Costs } from '../components/Costs';
import { Spends } from "../components/Spends";
import { Orders } from "../components/Orders";

export const Home = () => {
    const {loading, revenues, costs, spends, orders, fetchRevenues, fetchCosts, fetchSpends, fetchOrders} = useContext(DatabaseContext)

    useEffect(() => {
        fetchRevenues();
        fetchCosts();
        fetchSpends();
        fetchOrders();
        // eslint-disable-next-line
    }, [])

    return (
      <Fragment>
        <h1>Выручка салонов</h1>
        {loading ? <Loader /> : <Revenues revenues={revenues} />}
        <hr />
        <h1>Затраты клиентов</h1>
        {loading ? <Loader /> : <Costs costs={costs} />}
        <hr />
        <h1>Клиенты потратившие больше 250К</h1>
        {loading ? <Loader /> : <Spends spends={spends} />}
        <hr />
        <h1>Заказы клиентов</h1>
        {loading ? <Loader /> : <Orders orders={orders} />}
      </Fragment>
    );
}