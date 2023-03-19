const ContactForm = () => {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-4xl font-bold mb-6">Contactez-moi</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-bold">Nom complet</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-400 py-2 px-4 rounded-lg" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-bold">Adresse email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-400 py-2 px-4 rounded-lg" required />
              </div>          
              <div className="col-span-2">
                <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                <textarea id="message" name="message" className="w-full border border-gray-400 py-2 px-4 rounded-lg" rows="6" required></textarea>
              </div>
            <div className="col-span-2">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Envoyer</button>
            </div>
            </div>

            </form>
        </div>
    </section>
  );
};

export default ContactForm;

  