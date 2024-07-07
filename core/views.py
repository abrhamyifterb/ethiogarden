from django.shortcuts import render

from rest_framework import viewsets, generics
from .models import Blog, Video, FAQ, AboutUs, ContactUs
from .serializers import BlogSerializer, VideoSerializer, FAQSerializer, AboutUsSerializer, ContactUsSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-published_date')
    serializer_class = BlogSerializer

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all().order_by('-published_date')
    serializer_class = VideoSerializer

class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class FAQListView(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class AboutUsViewSet(viewsets.ModelViewSet):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer


def index(request):
    return render(request, 'index.html')
