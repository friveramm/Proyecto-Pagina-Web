from django.db import models

# Create your models here.
class Region(models.Model):
    id_region = models.AutoField(db_column="idRegion", primary_key=True)
    region = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return str(self.region)
    
class Comuna(models.Model):
    id_comuna = models.AutoField(db_column="idComuna", primary_key=True)
    comuna = models.CharField(max_length=50, blank=False, null=False)
    id_region = models.ForeignKey(
        "Region", on_delete=models.CASCADE, db_column="idRegion"
    )

    def __str__(self):
        return str(self.comuna)


class Usuario(models.Model):
    rut = models.CharField(primary_key=True, max_length=10)
    nombre = models.CharField(max_length=20)
    id_region = models.ForeignKey(
        "Region", on_delete=models.CASCADE, db_column="idRegion"
    )
    id_comuna = models.ForeignKey(
        "Comuna", on_delete=models.CASCADE, db_column="idComuna"
    )
    direccion = models.CharField(max_length=50, blank=True, null=True)
    celular = models.CharField(max_length=12)
    email = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    

    def __str__(self):
        return (
            str(self.nombre)
            + " "
            + str(self.apellido_paterno)
            + " "
            + str(self.apellido_materno)
        )

class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=300)
    precio = models.IntegerField