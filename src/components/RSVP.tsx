import  { useState } from 'react';
// import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useForm } from 'react-hook-form';
// import { CheckCircle2 } from 'lucide-react';
import { RSVPFormData } from '../types';

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RSVPFormData>();
  const attending = watch('attending', false);
  
  const onSubmit = (data: RSVPFormData) => {
    console.log(data);
    // Here you would typically send this data to a server
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };
  
  return (
    <section id="rsvp" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-primary-100 to-secondary-100 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4">
            Are You Attending?
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Kami akan sangat senang jika Anda bisa hadir di hari spesial kami. Mohon konfirmasi kehadiran Anda.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-6"></div>
        </AnimatedSection>
        
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <AnimatedSection className="text-center p-8 bg-primary-50 rounded-xl border border-primary-100">
              {/* <CheckCircle2 size={64} className="text-primary-500 mx-auto mb-4" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 className="text-2xl font-display mb-2">Terima Kasih!</h3>
              <p className="text-neutral-600">
                Konfirmasi kehadiran Anda telah kami terima. Kami menantikan kehadiran Anda pada hari spesial kami.
              </p>
            </AnimatedSection>
          ) : (
            <AnimatedSection className="bg-white shadow-xl rounded-xl p-8 border border-neutral-100">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.name ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="Nama Anda"
                      {...register('name', { required: true })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">Nama harus diisi</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.email ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="Email Anda"
                      {...register('email', { 
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">Email harus valid</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.phone ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="Nomor Telepon Anda"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">No. Telepon harus diisi</p>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="attending"
                      className="w-5 h-5 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                      {...register('attending')}
                    />
                    <label htmlFor="attending" className="ml-2 block text-neutral-700">
                      Saya akan hadir
                    </label>
                  </div>
                  
                  {attending && (
                    <div>
                      <label htmlFor="numberOfGuests" className="block text-sm font-medium text-neutral-700 mb-1">
                        Jumlah Tamu
                      </label>
                      <select
                        id="numberOfGuests"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        {...register('numberOfGuests', { required: attending })}
                      >
                        <option value="1">1 Orang</option>
                        <option value="2">2 Orang</option>
                        <option value="3">3 Orang</option>
                        <option value="4">4 Orang</option>
                        <option value="5">5 Orang</option>
                      </select>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Pesan/Ucapan
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tuliskan ucapan atau doa untuk kedua mempelai"
                      {...register('message')}
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Kirim Konfirmasi
                    </button>
                  </div>
                </div>
              </form>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;