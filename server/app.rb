require 'sinatra'
require 'sinatra/json'
require './system'

class Backend < Sinatra::Application
	configure do
		set :port, 8080
		set :views, settings.root + '/templates'
	end
	
	get '/' do
		@docs = markdown :docs
		haml :index
	end
	
	get '/system' do
		json({
			:time => System.get_time,
			:has_internet => System.has_connection?
		})
	end
end