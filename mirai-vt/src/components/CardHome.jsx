'use client';
import Card from './Card';
import React from 'react';
import Link from 'next/link';

const ImageHome = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Artist</h2>
            <p className="mt-2 mb-4">
              Add a new Image to the gallery and share it with the world
            </p>
            <Link
              href="/addImage"
              passHref
              className="inline-block bg-black text-white
              rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Add Image
            </Link>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold">For User</h2>
            <p className="mt-2 mb-4">
              List your Images to find the perfect Image for you
            </p>
            <a
              href="/browseImage"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Browse Images
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImageHome;
