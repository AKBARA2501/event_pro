import MySQLdb

HOST='localhost'
USER='root'
PASSWORD='akbar@27022004'
DB='event_pro'

conn = MySQLdb.connect(host=HOST,user=USER,passwd=PASSWORD)
cur = conn.cursor()
cur.execute(f"CREATE DATABASE IF NOT EXISTS {DB} CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;")
print('Database created or already exists:', DB)
cur.close()
conn.close()
