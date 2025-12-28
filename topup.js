import { useState } from 'react';
import { ShoppingCart, Trash2, Search, ChevronRight } from 'lucide-react';

export default function VoucherStore() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [expandedCart, setExpandedCart] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const vouchers = [
    {
      id: 1,
      name: 'Google Play',
      denomination: '50K',
      price: 52000,
      value: 50000,
      category: 'gaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><path d="M20 30 L80 80 M80 30 L20 80" stroke="%233DDC84" stroke-width="8" stroke-linecap="round"/><circle cx="35" cy="35" r="8" fill="%23EA4335"/><circle cx="65" cy="35" r="8" fill="%234285F4"/><circle cx="65" cy="65" r="8" fill="%23FBBC04"/><circle cx="35" cy="65" r="8" fill="%2334A853"/></svg>'
    },
    {
      id: 2,
      name: 'Google Play',
      denomination: '100K',
      price: 102000,
      value: 100000,
      category: 'gaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><path d="M20 30 L80 80 M80 30 L20 80" stroke="%233DDC84" stroke-width="8" stroke-linecap="round"/><circle cx="35" cy="35" r="8" fill="%23EA4335"/><circle cx="65" cy="35" r="8" fill="%234285F4"/><circle cx="65" cy="65" r="8" fill="%23FBBC04"/><circle cx="35" cy="65" r="8" fill="%2334A853"/></svg>'
    },
    {
      id: 3,
      name: 'Google Play',
      denomination: '200K',
      price: 202000,
      value: 200000,
      category: 'gaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><path d="M20 30 L80 80 M80 30 L20 80" stroke="%233DDC84" stroke-width="8" stroke-linecap="round"/><circle cx="35" cy="35" r="8" fill="%23EA4335"/><circle cx="65" cy="35" r="8" fill="%234285F4"/><circle cx="65" cy="65" r="8" fill="%23FBBC04"/><circle cx="35" cy="65" r="8" fill="%2334A853"/></svg>'
    },
    {
      id: 4,
      name: 'iTunes',
      denomination: '50K',
      price: 52000,
      value: 50000,
      category: 'gaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><path d="M50 15 Q65 35 65 50 Q65 75 50 85 Q35 75 35 50 Q35 35 50 15Z" fill="%23555555"/><circle cx="50" cy="52" r="6" fill="%23ffffff"/></svg>'
    },
    {
      id: 5,
      name: 'iTunes',
      denomination: '100K',
      price: 102000,
      value: 100000,
      category: 'gaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><path d="M50 15 Q65 35 65 50 Q65 75 50 85 Q35 75 35 50 Q35 35 50 15Z" fill="%23555555"/><circle cx="50" cy="52" r="6" fill="%23ffffff"/></svg>'
    },
    {
      id: 6,
      name: 'Steam Wallet',
      denomination: '100K',
      price: 108000,
      value: 100000,
      category: 'gaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><circle cx="50" cy="50" r="35" fill="%23000000" opacity="0.1"/><circle cx="40" cy="40" r="12" fill="%231B2838"/><circle cx="60" cy="50" r="12" fill="%231B2838"/><circle cx="50" cy="65" r="12" fill="%231B2838"/><circle cx="40" cy="40" r="8" fill="%2300A0DF"/><circle cx="60" cy="50" r="8" fill="%2300A0DF"/><circle cx="50" cy="65" r="8" fill="%2300A0DF"/></svg>'
    },
    {
      id: 7,
      name: 'Spotify',
      denomination: '1 Bulan',
      price: 54900,
      value: 54900,
      category: 'streaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><circle cx="50" cy="50" r="35" fill="%231DB954"/><path d="M35 45 Q50 35 60 42 M35 50 Q55 40 65 48 M35 55 Q52 48 62 55" stroke="%23ffffff" stroke-width="3" stroke-linecap="round" fill="none"/></svg>'
    },
    {
      id: 8,
      name: 'Netflix',
      denomination: '1 Bulan',
      price: 129000,
      value: 129000,
      category: 'streaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="25" y="25" width="50" height="50" fill="%23E50914" rx="3"/><path d="M38 40 L38 60 M42 40 L42 60 M46 40 L46 60 M50 40 L50 60 M54 40 L54 60 M58 40 L58 60 M62 40 L62 60" stroke="%23ffffff" stroke-width="1.5"/></svg>'
    },
    {
      id: 9,
      name: 'Disney+',
      denomination: '1 Bulan',
      price: 79000,
      value: 79000,
      category: 'streaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="20" y="20" width="60" height="60" fill="%23113CCF" rx="5"/><text x="50" y="65" font-size="40" font-weight="bold" fill="%23ffffff" text-anchor="middle" font-family="Arial">D+</text></svg>'
    },
    {
      id: 10,
      name: 'YouTube Premium',
      denomination: '1 Bulan',
      price: 139000,
      value: 139000,
      category: 'streaming',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="15" y="30" width="70" height="40" fill="%23FF0000" rx="5"/><polygon points="42,45 42,65 62,55" fill="%23ffffff"/></svg>'
    },
    {
      id: 11,
      name: 'Canva Pro',
      denomination: '1 Tahun',
      price: 139000,
      value: 139000,
      category: 'tools',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="25" y="25" width="50" height="50" fill="%2300D4FF" rx="3"/><circle cx="35" cy="35" r="5" fill="%23ffffff"/><rect x="42" y="32" width="3" height="16" fill="%23ffffff"/><rect x="48" y="38" width="10" height="3" fill="%23ffffff"/></svg>'
    },
    {
      id: 12,
      name: 'Microsoft 365',
      denomination: '1 Tahun',
      price: 749000,
      value: 749000,
      category: 'tools',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="28" y="28" width="16" height="16" fill="%23F25022"/><rect x="56" y="28" width="16" height="16" fill="%237FBA00"/><rect x="28" y="56" width="16" height="16" fill="%2300A4EF"/><rect x="56" y="56" width="16" height="16" fill="%23FFB900"/></svg>'
    },
    {
      id: 13,
      name: 'GoPay',
      denomination: '50K',
      price: 50000,
      value: 50000,
      category: 'ewallet',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><circle cx="50" cy="50" r="35" fill="%2300B241"/><path d="M45 40 Q50 35 55 40 Q55 48 50 52 Q45 48 45 40 Z M42 50 Q42 58 50 62 Q58 58 58 50" stroke="%23ffffff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>'
    },
    {
      id: 14,
      name: 'OVO',
      denomination: '50K',
      price: 50000,
      value: 50000,
      category: 'ewallet',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><circle cx="50" cy="50" r="35" fill="%238B1C62"/><path d="M50 30 Q65 42 65 50 Q65 65 50 70 Q35 65 35 50 Q35 42 50 30 Z" fill="%23ffffff" opacity="0.2"/><circle cx="50" cy="50" r="12" fill="%23ffffff"/></svg>'
    },
    {
      id: 15,
      name: 'DANA',
      denomination: '50K',
      price: 50000,
      value: 50000,
      category: 'ewallet',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="22" y="25" width="56" height="50" fill="%235B2C8A" rx="5"/><text x="50" y="58" font-size="32" font-weight="bold" fill="%23ffffff" text-anchor="middle" font-family="Arial">DANA</text></svg>'
    },
    {
      id: 16,
      name: 'LinkAja',
      denomination: '50K',
      price: 50000,
      value: 50000,
      category: 'ewallet',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ffffff" width="100" height="100"/><rect x="15" y="25" width="70" height="50" fill="%23FF6B35" rx="5"/><circle cx="35" cy="50" r="8" fill="%23ffffff"/><circle cx="65" cy="50" r="8" fill="%23ffffff"/><line x1="43" y1="50" x2="57" y2="50" stroke="%23ffffff" stroke-width="3"/></svg>'
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'streaming', label: 'Streaming' },
    { id: 'tools', label: 'Tools' },
    { id: 'ewallet', label: 'E-Wallet' }
  ];

  const filteredVouchers = vouchers.filter(v => {
    const matchCategory = selectedCategory === 'all' || v.category === selectedCategory;
    const matchSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const addToCart = (voucher) => {
    const existing = cart.find(item => item.id === voucher.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === voucher.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...voucher, qty: 1 }]);
    }
  };

  const removeFromCart = (voucherId) => {
    setCart(cart.filter(item => item.id !== voucherId));
  };

  const updateQty = (voucherId, qty) => {
    if (qty <= 0) {
      removeFromCart(voucherId);
    } else {
      setCart(cart.map(item =>
        item.id === voucherId ? { ...item, qty } : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      setMessage('Lengkapi data penerima terlebih dahulu');
      return;
    }

    if (!selectedPaymentMethod) {
      setMessage('Pilih metode pembayaran terlebih dahulu');
      return;
    }

    if (cart.length === 0) {
      setMessage('Keranjang kosong');
      return;
    }

    setLoading(true);
    setMessage('Memproses...');

    setTimeout(() => {
      const items = cart.map(v => `${v.name} ${v.denomination}`).join(', ');
      setMessage(`✓ Pembayaran berhasil!\n\nMetode Pembayaran: ${selectedPaymentMethod}\nItem: ${items}\nTotal: Rp ${cartTotal.toLocaleString('id-ID')}\n\nKode voucher akan dikirim ke:\n${customerInfo.email}`);
      setCart([]);
      setCustomerInfo({ name: '', email: '', phone: '' });
      setSelectedPaymentMethod('');
      setShowCheckout(false);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Voucher Store</h1>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
              <ShoppingCart size={18} className="text-gray-600" />
              <span className="font-medium text-gray-900">{cartCount}</span>
              <span className="text-gray-500">•</span>
              <span className="font-medium text-gray-900">Rp {cartTotal.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Cari voucher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            {/* Categories */}
            <div className="flex gap-2 mb-8 pb-4 border-b border-gray-200 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">{filteredVouchers.length} produk tersedia</p>
            </div>

            {/* Voucher Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredVouchers.map(voucher => (
                <div
                  key={voucher.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-md transition bg-white"
                >
                  <div className="mb-3 w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">
                    <img src={voucher.logo} alt={voucher.name} className="w-14 h-14 object-cover" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{voucher.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{voucher.denomination}</p>
                  <div className="mb-3">
                    <p className="text-lg font-bold text-gray-900">
                      Rp {voucher.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(voucher)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    Tambah
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Cart Summary */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Keranjang</h2>

              {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-sm py-8">Belum ada item</p>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.denomination}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-600 ml-2"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                            className="w-10 px-2 py-1 border border-gray-200 rounded text-center text-sm"
                          />
                          <p className="text-sm font-semibold text-gray-900">
                            Rp {(item.price * item.qty).toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Summary */}
                  <div className="border-t border-gray-200 pt-4 mb-4 space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Subtotal</span>
                      <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Biaya Admin</span>
                      <span className="text-green-600 font-medium">Gratis</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-gray-900 border-t border-gray-200 pt-2 mt-2">
                      <span>Total</span>
                      <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCheckout(!showCheckout)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-between px-4"
                  >
                    <span>{showCheckout ? 'Tutup' : 'Lanjut Checkout'}</span>
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Checkout Form */}
              {showCheckout && cart.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">Data Penerima</h3>
                  <input
                    type="text"
                    placeholder="Nama lengkap"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="No. WhatsApp"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">Metode Pembayaran</h3>
                  <select
                    value={selectedPaymentMethod}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Pilih metode pembayaran</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="GoPay">GoPay</option>
                    <option value="OVO">OVO</option>
                    <option value="DANA">DANA</option>
                    <option value="LinkAja">LinkAja</option>
                  </select>
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-sm transition disabled:opacity-50"
                  >
                    {loading ? 'Memproses...' : 'Bayar Sekarang'}
                  </button>
                  {message && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-xs text-green-800 text-center whitespace-pre-line">
                      {message}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold text-gray-900 mb-3">Tentang</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Bantuan</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Kontak</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Kebijakan</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Ikuti Kami</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Voucher Store. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
