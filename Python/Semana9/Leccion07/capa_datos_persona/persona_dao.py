class PersonaDAO:
    """
    DAO significa : Data Access Object
    CRUD significa:
                    Create -> Insertar
                    Read -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM   persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona (nombre, apellido, email) VALUES (%S, %S, %S)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%S, apellido=%S, email=%S WHERE id_persona=%S'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%S'