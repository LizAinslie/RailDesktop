require 'net/ping'

class System
	def self.has_connection?
		Net::Ping::External.new('8.8.8.8').ping?
	end
	
	def self.get_time
		(Time.now).to_s
	end
end