# from flask import Flask, request, jsonify

# app = Flask(__name__)

# @app.route('/endpoint', methods=['POST'])
# def recibir_datos():
#     # Obtener los datos enviados en el cuerpo de la petición
#     datos = request.json
    
#     # Hacer algo con los datos recibidos, como guardarlos en una base de datos o procesarlos
#     print("Datos recibidos:", datos)
    
#     # Responder con un mensaje de confirmación
#     return jsonify({"mensaje": "Datos recibidos correctamente"}), 200

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import sqlite3
app = Flask(__name__)
CORS(app)


def Tabla():
    conn = sqlite3.connect('ACCESS.db')
    cursor = conn.cursor()
    cursor.execute("""  CREATE TABLE IF NOT EXISTS ACCESS (
                    usuarios TEXT NOT NULL,
                    contraseñas TEXT NOT NULL
                    )""" )
    conn.commit()
    conn.close()
    

def Verificacion(usuario, contraseña):
    Tabla()
    conn = sqlite3.connect('ACCESS.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO ACCESS (usuarios, contraseñas) values (?, ?)', ('28775241', '230904'))
    
    cursor.execute('SELECT * FROM ACCESS WHERE usuarios = ? AND contraseñas = ?', (usuario, contraseña))
    resultado = cursor.fetchone()
    conn.close()
    
    if resultado:
         return True
    else:
         return False
    

@app.route("/enviar", methods = ['POST'] )
def recibir():
    data = request.get_json()
    datosRecibidosU = data.get('usuario')
    datosRecibidosP = data.get('password')
    print(datosRecibidosU, datosRecibidosP)

    if Verificacion(datosRecibidosU, datosRecibidosP) :
        return jsonify({'trueOrFalse' : True})
    else:
        return jsonify({'trueOrFalse' : False})
    
app.run(debug=False, port=5002)