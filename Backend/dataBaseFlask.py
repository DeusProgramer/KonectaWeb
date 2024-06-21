import sqlite3
from flask import Flask
from flask import jsonify
from flask import request
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime
from flask_cors import CORS


class DataBaseFlask:    
    def __init__(self) -> None:
        self.app = Flask(__name__)
        CORS(self.app)
        self.nombresCargos = {}
        self.descripcion = {}
        self.requisitos = {}
        self.id = {}
        self.infoEmpresa = {}
        self.aspirantesNombres = {}
        self.aspirantesCI = {}
        self.aspirantesNacionalidad = {}
        self.aspirantesEstadoCivil = {}
        self.aspirantesFechaNacimiento = {}
        self.aspirantesNumeroTelef = {}
        self.aspirantesEmail = {}
        self.aspirantesDireccion = {}
        self.aspirantesProfesion = {}
        self.aspirantesTitulo = {}
        self.aspirantesInstituto = {}
        self.aspirantesCursos = {}
        self.aspirantesDuracionCursos = {}
        self.aspirantesInstitucionCursos = {}
        self.aspirantesCargoAntiguoTrabajo = {}
        self.aspirantesAñoAntiguoTrabajo = {}
        self.aspirantesInstitucionAntiguoTrabajo = {}
        self.aspirantesDiscapacidad = {}
        self.aspirantesDisponibilidad = {}
        self.aspirantesCargoKonecta = {}
        
        @self.app.route("/enviarCorreo", methods = ['POST'])
        def CorreoBD():
            data = request.get_json()
            correo = data.get('correo')
            # Configuración de los parámetros del correo
            smtp_server = "smtp.gmail.com"  # Reemplaza con tu servidor SMTP
            smtp_port = 587  # Puerto para TLS/STARTTLS
            smtp_username = 'konectacompany@gmail.com'  # Tu dirección de correo
            smtp_password = 'stadonexkekcfnss'  # Tu contraseña de correo

            # Crear instancia del mensaje
            msg = MIMEMultipart()

            # Configurar los parámetros del mensaje
            msg['From'] = smtp_username
            msg['To'] = correo
            msg['Subject'] = 'Confirmación de entrevista de trabajo'

            # Crear contenido HTML del mensaje
            html = f"""
    <html>
      <head>
        <style>
          body {{
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
          }}
          .container {{
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }}
          .header {{
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            color: #333333;
            margin-bottom: 20px;
          }}
          .content {{
            font-size: 16px;
            color: #555555;
            line-height: 1.6;
          }}
          .footer {{
            font-size: 14px;
            color: #888888;
            text-align: center;
            margin-top: 20px;
          }}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">¡Felicidades!</div>
          <div class="content">
            <p>Has sido seleccionado para una entrevista de trabajo.</p>
            <p><strong>Fecha de la entrevista:</strong></p>
            <p>Te esperamos.</p>
          </div>
          <div class="footer">
            <p>Gracias por tu interés en formar parte de nuestra empresa.</p>
          </div>
        </div>
      </body>
    </html>
    """

            # Adjuntar el contenido HTML al mensaje
            msg.attach(MIMEText(html, 'html'))

            try:
                # Crear una conexión segura con el servidor SMTP
                server = smtplib.SMTP(smtp_server, smtp_port)
                server.starttls()  # Iniciar conexión TLS/STARTTLS

                # Iniciar sesión en el servidor SMTP
                server.login(smtp_username, smtp_password)

                # Enviar correo electrónico
                server.sendmail(smtp_username, correo, msg.as_string())

                # Terminar la conexión con el servidor SMTP
                server.quit()

                print(f'Correo enviado a {correo} correctamente!')
                return jsonify({"variable":True})
            except Exception as e:
                print(f'Error al enviar el correo: {str(e)}')
                return jsonify({"variable":False})
            


        @self.app.route("/enviar", methods = ['POST'] )
        def recibir():
            data = request.get_json()
            datosRecibidosU = data.get('usuario')
            datosRecibidosP = data.get('password')
            print(datosRecibidosU, datosRecibidosP)

            if DataBaseFlask.VerificacionEmpresa(self, datosRecibidosU, datosRecibidosP):
                return jsonify({"trueOrFalse": True})
            else:
                return jsonify({'trueOrFalse' : False})
    

        @self.app.route("/cargosBaseDatos", methods = ['POST'])
        def hola():
            DataBaseFlask.extraerDatos(self)
            return jsonify({"nombre":self.nombresCargos,
                            "descripcion":self.descripcion,
                            "Requisitos":self.requisitos,
                            "id":self.id,
                            "info": self.infoEmpresa})
        
        @self.app.route("/enviarAspirantes", methods = ['POST'])
        def enviarAspirantes():
            data = request.get_json()
            cargoEnviar = data.get('cargoAspirante')
            conn = sqlite3.connect("AASSDD.db")
            query2 = f"select * from aspirantes where '{cargoEnviar}' = cargoKonecta"
            cursor2 = conn.cursor()
            cursor2.execute(query2)
            resultado2 = cursor2.fetchall()
            j = 0

            if resultado2:
                while j < len(resultado2):
                    self.aspirantesNombres[j] = resultado2[j][1]
                    self.aspirantesCI[j] = resultado2[j][2]
                    self.aspirantesNacionalidad[j] = resultado2[j][3]
                    self.aspirantesEstadoCivil[j] = resultado2[j][4]
                    self.aspirantesFechaNacimiento[j] = resultado2[j][5]
                    self.aspirantesNumeroTelef[j] = resultado2[j][6]
                    self.aspirantesEmail[j] = resultado2[j][7]
                    self.aspirantesDireccion[j] = resultado2[j][8]
                    self.aspirantesProfesion[j] = resultado2[j][9]
                    self.aspirantesTitulo[j] = resultado2[j][10]
                    self.aspirantesInstituto[j] = resultado2[j][11]
                    self.aspirantesCursos[j] = resultado2[j][12]
                    self.aspirantesDuracionCursos[j] = resultado2[j][13]
                    self.aspirantesInstitucionCursos[j] = resultado2[j][14]
                    self.aspirantesCargoAntiguoTrabajo[j] = resultado2[j][15]
                    self.aspirantesAñoAntiguoTrabajo[j] = resultado2[j][16]
                    self.aspirantesInstitucionAntiguoTrabajo[j] = resultado2[j][17]
                    self.aspirantesDiscapacidad[j] = resultado2[j][18]
                    self.aspirantesDisponibilidad[j] = resultado2[j][19]
                    self.aspirantesCargoKonecta[j] = resultado2[j][20]

                    j = j + 1

                return jsonify({'nombres': self.aspirantesNombres,
                                'cedulaID': self.aspirantesCI,
                                'nacionalidad': self.aspirantesNacionalidad,
                                'estadoCivil': self.aspirantesEstadoCivil,
                                'nacimiento': self.aspirantesFechaNacimiento,
                                'numero': self.aspirantesNumeroTelef,
                                'email': self.aspirantesEmail,
                                'direccion': self.aspirantesDireccion,
                                'profesion': self.aspirantesProfesion,
                                'titulo': self.aspirantesTitulo,
                                'cole/uni': self.aspirantesInstituto,
                                'cursos': self.aspirantesCursos,
                                'duracionCurso': self.aspirantesDuracionCursos,
                                'institutoCurso': self.aspirantesInstitucionCursos,
                                'cargoAntiguoTrabajo': self.aspirantesAñoAntiguoTrabajo,
                                'duracionTrabajoAnti': self.aspirantesAñoAntiguoTrabajo,
                                'sitioTrabajoAnti': self.aspirantesInstitucionAntiguoTrabajo,
                                'discapacidad': self.aspirantesDiscapacidad,
                                'disponibilidad': self.aspirantesDisponibilidad,
                                'cargoKonecta': self.aspirantesCargoKonecta}) 
            return jsonify({
                'variable': None
            })        

        
    def crearBaseDatos(self):
        conn = sqlite3.connect("AASSDD.db")
        query = "create table if not exists mwr (nombresCargos TEXT, descripcion TEXT, requisitos TEXT)"
        query2 = """create table if not exists clientes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL DEFAULT 0, 
        nombreEmpresa TEXT, contrasenaEmpresa TEXT, gmailEmpresa TEXT, direccionEmpresa TEXT, numeroEmpresa TEXT)"""
        query3 = """create table if not exists aspirantes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL DEFAULT 0, 
        nombresApellidos TEXT, cudulaID TEXT, nacionalidad TEXT, estadoCivil TEXT, fechaNatalicio TEXT,  numeroTelefono TEXT,
        emailPersonal TEXT, direccion TEXT, profesion TEXT, titulo TEXT, institucion TEXT, cursos TEXT, duracionCurso TEXT,
        institucionCurso TEXT, CargoDesempenado TEXT, añosDesempenado TEXT, institucionDesempenado TEXT, discapacidad TEXT,
        disponibilidad TEXT, cargoKonecta TEXT)"""
        conn.execute(query)
        conn.execute(query2)
        conn.execute(query3)
        conn.commit()
        conn.close()

    def VerificacionEmpresa(self ,gmailEmpresa, contrasenaEmpresa):
        conn = sqlite3.connect("AASSDD.db")
        query = f"select * from clientes where gmailEmpresa == '{gmailEmpresa}' and contrasenaEmpresa == '{contrasenaEmpresa}' "
        cursor = conn.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        index = 0
        if result :
            while index < 6:
                self.infoEmpresa[index] = result[0][index]
                index = index + 1
            return True
        else:
            return False
        
    def extraerDatos(self):
            conn = sqlite3.connect("AASSDD.db")
            query = "select * from mwr"
            query2 = "select * from aspirantes"
            cursor1 = conn.cursor()
            cursor2 = conn.cursor()
            cursor1.execute(query)
            cursor2.execute(query2)
            resultado1 = cursor1.fetchall()
            resultado2 = cursor2.fetchall()
            j = 0
            i = 0

            while i < len(resultado1):
                self.nombresCargos[i] = resultado1[i][0]
                self.descripcion[i] = resultado1[i][1]
                self.requisitos[i] = resultado1[i][2]
                self.id[i] = resultado1[i][3]
                i = i + 1

            

    def guardarAspirantes(self, nombreApellido, ci, nacionalidad, estCivil, nacimiento, numTelef, email, direccion, profesion, 
                          titulo, cole_uni, curso, duracionCurso, instiCurso, antiguaChamba, añosChamba, lugarChamba, discapacidad, 
                          disponibilidad, cargoKonecta):
        conn = sqlite3.connect("AASSDD.db")
        query = f"""insert into aspirantes (nombresApellidos, cudulaID, nacionalidad, estadoCivil, fechaNatalicio,  numeroTelefono,
        emailPersonal, direccion, profesion, titulo, institucion, cursos, duracionCurso,
        institucionCurso, CargoDesempenado, añosDesempenado, institucionDesempenado, discapacidad,
        disponibilidad, cargoKonecta) values ('{nombreApellido}', '{ci}', '{nacionalidad}', '{estCivil}', '{nacimiento}', '{numTelef}', '{email}',
        '{direccion}', '{profesion}', '{titulo}', '{cole_uni}', '{curso}', '{duracionCurso}', '{instiCurso}', '{antiguaChamba}', '{añosChamba}', 
        '{lugarChamba}', '{discapacidad}', '{disponibilidad}', '{cargoKonecta}')"""
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
        conn.close()
            
           
    
if __name__ == '__main__':
    gg = DataBaseFlask() 
    # gg.guardarAspirantes( "Nelvismar Medina Arcaya", "28777645", "Venezolano", "Soltero", "16/12/2004", "04246829614", 
    #                      "nelvism17@gmail.com", "Antiguoaeropuerto", "Administradora", "Licenciado",
    #                      "Unefa", "Contaduria", "2 años", "Iutirla", "Administradora", "1", "INEA", "Ninguna", 
    #                      "Inmediata", "Supervisor de Almacen")
    gg.crearBaseDatos()
    gg.app.run(debug=True, port=5002)

