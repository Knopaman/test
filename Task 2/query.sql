SELECT o.order_id, SUM(p.price)as total FROM orders o
JOIN phones p
ON o.phone_id = p.phone_id
WHERE o.order_date >= '2016-10-10 15:00:00'
AND o.order_date <= '2016-10-11 15:30:00'
GROUP BY o.order_id
HAVING SUM(p.price) > 500

SELECT o.order_id, SUM(p.price) as total FROM orders o
JOIN phones p
ON o.phone_id = p.phone_id
WHERE o.order_date BETWEEN (now() - INTERVAL '1 WEEK') AND now()
GROUP BY o.order_id
HAVING SUM(p.price) > 500