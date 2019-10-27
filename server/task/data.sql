--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10
-- Dumped by pg_dump version 10.10

-- Started on 2019-10-27 20:52:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2842 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 199 (class 1259 OID 24619)
-- Name: cars; Type: TABLE; Schema: public; Owner: autosalon
--

CREATE TABLE public.cars (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    dealership_id integer
);


ALTER TABLE public.cars OWNER TO autosalon;

--
-- TOC entry 198 (class 1259 OID 24617)
-- Name: cars_id_seq; Type: SEQUENCE; Schema: public; Owner: autosalon
--

CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cars_id_seq OWNER TO autosalon;

--
-- TOC entry 2843 (class 0 OID 0)
-- Dependencies: 198
-- Name: cars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: autosalon
--

ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;


--
-- TOC entry 201 (class 1259 OID 24632)
-- Name: clients; Type: TABLE; Schema: public; Owner: autosalon
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL
);


ALTER TABLE public.clients OWNER TO autosalon;

--
-- TOC entry 200 (class 1259 OID 24630)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: autosalon
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO autosalon;

--
-- TOC entry 2844 (class 0 OID 0)
-- Dependencies: 200
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: autosalon
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 197 (class 1259 OID 24608)
-- Name: dealerships; Type: TABLE; Schema: public; Owner: autosalon
--

CREATE TABLE public.dealerships (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    phone character varying(255) NOT NULL
);


ALTER TABLE public.dealerships OWNER TO autosalon;

--
-- TOC entry 196 (class 1259 OID 24606)
-- Name: dealerships_id_seq; Type: SEQUENCE; Schema: public; Owner: autosalon
--

CREATE SEQUENCE public.dealerships_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dealerships_id_seq OWNER TO autosalon;

--
-- TOC entry 2845 (class 0 OID 0)
-- Dependencies: 196
-- Name: dealerships_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: autosalon
--

ALTER SEQUENCE public.dealerships_id_seq OWNED BY public.dealerships.id;


--
-- TOC entry 203 (class 1259 OID 24643)
-- Name: sales; Type: TABLE; Schema: public; Owner: autosalon
--

CREATE TABLE public.sales (
    id integer NOT NULL,
    date timestamp with time zone NOT NULL,
    number_of_cars integer NOT NULL,
    amount bigint NOT NULL,
    dealership_id integer,
    car_id integer,
    client_id integer
);


ALTER TABLE public.sales OWNER TO autosalon;

--
-- TOC entry 202 (class 1259 OID 24641)
-- Name: sales_id_seq; Type: SEQUENCE; Schema: public; Owner: autosalon
--

CREATE SEQUENCE public.sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_id_seq OWNER TO autosalon;

--
-- TOC entry 2846 (class 0 OID 0)
-- Dependencies: 202
-- Name: sales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: autosalon
--

ALTER SEQUENCE public.sales_id_seq OWNED BY public.sales.id;


--
-- TOC entry 2691 (class 2604 OID 24622)
-- Name: cars id; Type: DEFAULT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);


--
-- TOC entry 2692 (class 2604 OID 24635)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 2690 (class 2604 OID 24611)
-- Name: dealerships id; Type: DEFAULT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.dealerships ALTER COLUMN id SET DEFAULT nextval('public.dealerships_id_seq'::regclass);


--
-- TOC entry 2693 (class 2604 OID 24646)
-- Name: sales id; Type: DEFAULT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.sales ALTER COLUMN id SET DEFAULT nextval('public.sales_id_seq'::regclass);


--
-- TOC entry 2830 (class 0 OID 24619)
-- Dependencies: 199
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: autosalon
--

COPY public.cars (id, name, dealership_id) FROM stdin;
1	BMW X3	1
2	BMW X5	1
3	BMW X6	1
4	Audi Q3	2
5	Audi Q5	2
6	Audi Q6	2
\.


--
-- TOC entry 2832 (class 0 OID 24632)
-- Dependencies: 201
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: autosalon
--

COPY public.clients (id, name, phone) FROM stdin;
1	Иванов Сергей	79107891122
2	Коробкин Олег	79107891155
3	Олейкин Роман	79107891166
4	Семенов Дмитрий	79107891177
\.


--
-- TOC entry 2828 (class 0 OID 24608)
-- Dependencies: 197
-- Data for Name: dealerships; Type: TABLE DATA; Schema: public; Owner: autosalon
--

COPY public.dealerships (id, name, address, phone) FROM stdin;
1	BMW-Фаворит	Москва, ул. Колчака, д.42	79105559966
2	Audi-Фаворит	Москва, ул. Колчака, д.43	79105559955
\.


--
-- TOC entry 2834 (class 0 OID 24643)
-- Dependencies: 203
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: autosalon
--

COPY public.sales (id, date, number_of_cars, amount, dealership_id, car_id, client_id) FROM stdin;
1	2014-10-01 00:00:00+06	1	2000000	1	1	1
2	2014-10-02 00:00:00+06	2	3500000	2	4	2
3	2014-10-02 00:00:00+06	1	2000000	1	3	3
4	2014-10-02 00:00:00+06	1	2000000	2	5	2
5	2014-10-02 00:00:00+06	2	2000000	1	1	2
6	2014-10-02 00:00:00+06	3	7800000	2	6	3
7	2014-10-03 00:00:00+06	4	10000000	1	1	4
8	2014-10-03 00:00:00+06	1	3000000	1	2	1
\.


--
-- TOC entry 2847 (class 0 OID 0)
-- Dependencies: 198
-- Name: cars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: autosalon
--

SELECT pg_catalog.setval('public.cars_id_seq', 1, false);


--
-- TOC entry 2848 (class 0 OID 0)
-- Dependencies: 200
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: autosalon
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, false);


--
-- TOC entry 2849 (class 0 OID 0)
-- Dependencies: 196
-- Name: dealerships_id_seq; Type: SEQUENCE SET; Schema: public; Owner: autosalon
--

SELECT pg_catalog.setval('public.dealerships_id_seq', 1, false);


--
-- TOC entry 2850 (class 0 OID 0)
-- Dependencies: 202
-- Name: sales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: autosalon
--

SELECT pg_catalog.setval('public.sales_id_seq', 1, false);


--
-- TOC entry 2697 (class 2606 OID 24624)
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- TOC entry 2699 (class 2606 OID 24640)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 2695 (class 2606 OID 24616)
-- Name: dealerships dealerships_pkey; Type: CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.dealerships
    ADD CONSTRAINT dealerships_pkey PRIMARY KEY (id);


--
-- TOC entry 2701 (class 2606 OID 24648)
-- Name: sales sales_pkey; Type: CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);


--
-- TOC entry 2702 (class 2606 OID 24625)
-- Name: cars cars_dealership_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_dealership_id_fkey FOREIGN KEY (dealership_id) REFERENCES public.dealerships(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2704 (class 2606 OID 24654)
-- Name: sales sales_car_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_car_id_fkey FOREIGN KEY (car_id) REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2705 (class 2606 OID 24659)
-- Name: sales sales_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2703 (class 2606 OID 24649)
-- Name: sales sales_dealership_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: autosalon
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_dealership_id_fkey FOREIGN KEY (dealership_id) REFERENCES public.dealerships(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2019-10-27 20:52:18

--
-- PostgreSQL database dump complete
--

