from django.contrib import admin

from core.models import Header, HomePage, Footer, Category, Blog, Video, AboutUs, ContactUs, FAQ

# Register your models here.
@admin.register(Header)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(HomePage)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(Footer)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(Category)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(Blog)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(Video)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(AboutUs)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(ContactUs)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(FAQ)
class StoreAdmin(admin.ModelAdmin):
    pass